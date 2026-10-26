export default async function handler(req, res) {
    const clientId = process.env.BLIZZARD_CLIENT_ID;
    const clientSecret = process.env.BLIZZARD_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        return res.status(500).json({ error: "Faltan las credenciales de Blizzard en Vercel." });
    }

    // 1. Obtener el servidor enviado desde la web (por defecto Ragnaros si no viene ninguno)
    const realm = (req.query.realm || 'ragnaros').toLowerCase();
    
    // 2. Definir automáticamente la región según el servidor seleccionado
    const euRealms = ['sanguino', 'dun-morogh', 'blackhand'];
    const region = euRealms.includes(realm) ? 'eu' : 'us';

    try {
        // 3. Obtener Token de acceso OAuth de Blizzard
        const credentials = Buffer.from(`${clientId.trim()}:${clientSecret.trim()}`).toString('base64');
        const tokenRes = await fetch(`https://oauth.battle.net/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        
        const tokenData = await tokenRes.json();
        if (!tokenData.access_token) {
            return res.status(500).json({ error: "No se pudo autenticar con Blizzard." });
        }

        // 4. Consultar la Casa de Subastas (Commodities) usando la región correcta (US o EU)
        const auctionsRes = await fetch(`https://${region}.api.blizzard.com/data/wow/auctions/commodities?namespace=dynamic-${region}&locale=es_MX`, {
            headers: { 'Authorization': `Bearer ${tokenData.access_token}` }
        });
        
        const auctionsData = await auctionsRes.json();
        if (!auctionsData.auctions) {
            return res.status(500).json({ error: `No se pudieron obtener los datos de la Casa de Subastas para la región ${region.toUpperCase()}.`, details: auctionsData });
        }

        // 5. Procesar los precios unitarios más bajos por ítem
        const prices = {};
        for (const auction of auctionsData.auctions) {
            const itemId = auction.item.id;
            const unitPrice = auction.unit_price || (auction.buyout ? Math.floor(auction.buyout / auction.quantity) : null);
            
            if (unitPrice) {
                const priceInGold = unitPrice / 10000;
                if (!prices[itemId] || priceInGold < prices[itemId]) {
                    prices[itemId] = Number(priceInGold.toFixed(2));
                }
            }
        }

        res.status(200).json({
            status: "¡Datos de la Casa de Subastas sincronizados!",
            realm: realm.toUpperCase(),
            region: region.toUpperCase(),
            totalItems: Object.keys(prices).length,
            prices: prices
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
