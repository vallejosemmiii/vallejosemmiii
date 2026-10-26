export default async function handler(req, res) {
    const clientId = process.env.BLIZZARD_CLIENT_ID;
    const clientSecret = process.env.BLIZZARD_CLIENT_SECRET;
    const region = 'us'; // Cambiá a 'eu' si usas servidores de Europa

    try {
        // 1. Pedir token de acceso a Blizzard usando las claves secretas
        const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
        const tokenResponse = await fetch(`https://oauth.battle.net/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        
        const tokenData = await tokenResponse.json();
        if (!tokenData.access_token) {
            throw new Error('No se pudo autenticar con Blizzard');
        }

        // 2. Respuesta de éxito con el token listo para usar
        res.status(200).json({ 
            status: "¡Conexión exitosa con los servidores de Blizzard!", 
            token_sample: tokenData.access_token.substring(0, 10) + "..." 
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
