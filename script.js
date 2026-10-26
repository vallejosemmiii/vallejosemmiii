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

document.getElementById('lang-selector').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.getElementById('app-title').textContent = translations[lang].title;
    document.getElementById('calculate-btn').textContent = translations[lang].btn;
    document.getElementById('realm-selector').options[0].text = translations[lang].selectRealm;
    document.querySelector('#results-container p').textContent = translations[lang].defaultText;
});
