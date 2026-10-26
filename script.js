const translations = {
    es: {
        title: "Calculadora de Crafteo WoW",
        btn: "Calcular Ganancias",
        selectRealm: "Selecciona tu servidor...",
        defaultText: "Selecciona un servidor para comenzar..."
    },
    en: {
        title: "WoW Crafting Calculator",
        btn: "Calculate Profits",
        selectRealm: "Select your realm...",
        defaultText: "Select a realm to start..."
    },
    de: {
        title: "WoW Herstellungsrechner",
        btn: "Gewinn berechnen",
        selectRealm: "Wähle deinen Server...",
        defaultText: "Wähle einen Server, um zu beginnen..."
    },
    fr: {
        title: "Calculateur d'Artisanat WoW",
        btn: "Calculer les Profits",
        selectRealm: "Sélectionnez votre serveur...",
        defaultText: "Sélectionnez un serveur pour commencer..."
    },
    pt: {
        title: "Calculadora de Criação WoW",
        btn: "Calcular Lucros",
        selectRealm: "Selecione seu servidor...",
        defaultText: "Selecione um servidor para começar..."
    }
};

// Cambio de idioma en tiempo real
document.getElementById('lang-selector').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.getElementById('app-title').textContent = translations[lang].title;
    document.getElementById('calculate-btn').textContent = translations[lang].btn;
    document.getElementById('opt-default-realm').textContent = translations[lang].selectRealm;
    document.getElementById('results-container').innerHTML = `<p>${translations[lang].defaultText}</p>`;
});

// Acción al hacer clic en Calcular (Conecta con la API segura de Vercel)
document.getElementById('calculate-btn').addEventListener('click', async () => {
    const realmSelector = document.getElementById('realm-selector').value;
    const resultsContainer = document.getElementById('results-container');
    const currentLang = document.getElementById('lang-selector').value;

    if (!realmSelector) {
        alert(currentLang === 'es' ? "Por favor, selecciona un servidor primero." : "Please select a realm first.");
        return;
    }

    resultsContainer.innerHTML = `<p>${currentLang === 'es' ? 'Conectando con los servidores de Blizzard...' : 'Connecting to Blizzard servers...'}</p>`;

    try {
        const response = await fetch(`/api/prices?realm=${realmSelector}`);
        const data = await response.json();

        if (data.error) {
            resultsContainer.innerHTML = `<p style="color: red;">Error: ${data.error}</p>`;
            return;
        }

        resultsContainer.innerHTML = `
            <div style="background: #1e1e1e; padding: 15px; border-radius: 6px; border-left: 4px solid #4CAF50; color: #fff;">
                <h3 style="margin-top: 0;">${currentLang === 'es' ? '¡Conexión establecida con éxito!' : 'Connection established successfully!'}</h3>
                <p>Servidor: <strong>${data.realm}</strong> (Región: <strong>${data.region}</strong>)</p>
                <p>${data.status}</p>
                <p style="color: #4CAF50; font-size: 0.9em;">Precios de la Casa de Subastas sincronizados correctamente.</p>
            </div>
        `;
    } catch (err) {
        resultsContainer.innerHTML = `<p style="color: red;">No se pudo conectar con el servidor backend.</p>`;
    }
});
