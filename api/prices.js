export default async function handler(req, res) {
    const clientId = process.env.BLIZZARD_CLIENT_ID;
    const clientSecret = process.env.BLIZZARD_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        return res.status(500).json({ 
            error: "Faltan las variables de entorno en Vercel. Asegurate de haber guardado BLIZZARD_CLIENT_ID y BLIZZARD_CLIENT_SECRET." 
        });
    }

    try {
        const credentials = Buffer.from(`${clientId.trim()}:${clientSecret.trim()}`).toString('base64');
        const tokenResponse = await fetch(`https://oauth.battle.net/token`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        
        const tokenData = await tokenResponse.json();
        
        if (!tokenResponse.ok) {
            return res.status(500).json({ 
                error: `Blizzard rechazó las credenciales (Código HTTP ${tokenResponse.status})`, 
                details: tokenData 
            });
        }

        if (!tokenData.access_token) {
            return res.status(500).json({ error: 'No se recibió un token de acceso válido', details: tokenData });
        }

        res.status(200).json({ 
            status: "¡Conexión exitosa con los servidores de Blizzard!", 
            token_sample: tokenData.access_token.substring(0, 10) + "..." 
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
