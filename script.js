const translations = {
    es: {
        title: "Calculadora de Crafteo WoW",
        btn: "Calcular Ganancias",
        selectRealm: "Selecciona tu servidor...",
        defaultText: "Selecciona un servidor y una receta para comenzar..."
    },
    en: {
        title: "WoW Crafting Calculator",
        btn: "Calculate Profits",
        selectRealm: "Select your realm...",
        defaultText: "Select a realm and recipe to start..."
    }
};

// Base de datos de recetas de ejemplo con IDs reales de materiales de Blizzard
// (Podés agregar más recetas fácilmente aquí)
const recipesDatabase = {
    "flask_alacrity": {
        name: "Frasco de Pungente Alacridad",
        salePrice: 450, // Precio estimado de venta en oro (o configurable)
        materials: [
            { id: 210815, name: "Hierba A", qty: 5 },  // IDs de ejemplo de componentes
            { id: 210802, name: "Hierba B", qty: 3 }
        ]
    },
    "gem_culminating": {
        name: "Rubí Culpable Deslumbrante",
        salePrice: 600,
        materials: [
            { id: 213744, name: "Mineral Cojo", qty: 10 },
            { id: 213750, name: "Polvo Mágico", qty: 2 }
        ]
    }
};

let cachedPrices = null;
let currentRealmRegion = null;

// Cambio de idioma
document.getElementById('lang-selector').addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang] || translations.es;
    document.getElementById('app-title').textContent = t.title;
    document.getElementById('calculate-btn').textContent = t.btn;
    document.getElementById('opt-default-realm').textContent = t.selectRealm;
    document.getElementById('default-text').textContent = t.defaultText;
});

// Acción principal de cálculo
document.getElementById('calculate-btn').addEventListener('click', async () => {
    const realm = document.getElementById('realm-selector').value;
    const recipeKey = document.getElementById('recipe-selector').value;
    const resultsContainer = document.getElementById('results-container');

    if (!realm) {
        alert("Por favor, selecciona un servidor primero.");
        return;
    }
    if (!recipeKey) {
        alert("Por favor, selecciona una receta.");
        return;
    }

    resultsContainer.innerHTML = `<p style="text-align: center; color: #ffb100;">Consultando la Casa de Subastas de Blizzard en tiempo real...</p>`;

    try {
        // Si aún no descargamos los precios en esta sesión, los pedimos a Vercel
        if (!cachedPrices || currentRealmRegion !== realm) {
            const response = await fetch(`/api/prices?realm=${realm}`);
            const data = await response.json();

            if (data.error) {
                resultsContainer.innerHTML = `<p style="color: #ff5252;">Error: ${data.error}</p>`;
                return;
            }

            cachedPrices = data.prices;
            currentRealmRegion = realm;
        }

        const recipe = recipesDatabase[recipeKey];
        let totalCraftCost = 0;
        let materialsHtml = '';

        // Calcular costo de cada material usando los datos de la AH
        recipe.materials.forEach(mat => {
            const unitPrice = cachedPrices[mat.id] || 15.50; // Precio por defecto si el ítem no tiene subastas activas
            const subtotal = unitPrice * mat.qty;
            totalCraftCost += subtotal;

            materialsHtml += `
                <tr style="border-bottom: 1px solid #333;">
                    <td style="padding: 8px;">${mat.name} (ID: ${mat.id})</td>
                    <td style="padding: 8px; text-align: center;">${mat.qty}</td>
                    <td style="padding: 8px; text-align: right;">${unitPrice.toFixed(2)}g</td>
                    <td style="padding: 8px; text-align: right; color: #ffb100;">${subtotal.toFixed(2)}g</td>
                </tr>
            `;
        });

        // Impuesto de la Casa de Subastas (5%)
        const ahTax = recipe.salePrice * 0.05;
        const netRevenue = recipe.salePrice - ahTax;
        const netProfit = netRevenue - totalCraftCost;
        const profitColor = netProfit >= 0 ? '#4CAF50' : '#ff5252';

        // Renderizar resultados completos
        resultsContainer.innerHTML = `
            <div style="background: #252525; padding: 20px; border-radius: 6px; border-left: 4px solid #ffb100;">
                <h2 style="margin-top: 0; color: #fff; font-size: 1.2rem;">${recipe.name}</h2>
                <p style="font-size: 0.85em; color: #aaa; margin-bottom: 15px;">Servidor: <strong>${realm.toUpperCase()}</strong> | Comisión AH (5%): <strong>${ahTax.toFixed(2)}g</strong></p>

                <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; margin-bottom: 15px;">
                    <thead>
                        <tr style="background: #2f2f2f; color: #aaa; text-align: left;">
                            <th style="padding: 8px;">Material</th>
                            <th style="padding: 8px; text-align: center;">Cant.</th>
                            <th style="padding: 8px; text-align: right;">Precio Unit.</th>
                            <th style="padding: 8px; text-align: right;">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${materialsHtml}
                    </tbody>
                </table>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; background: #1a1a1a; padding: 12px; border-radius: 4px; text-align: center;">
                    <div>
                        <span style="font-size: 0.8em; color: #888; display: block;">Costo Materiales</span>
                        <strong style="color: #ff5252; font-size: 1.1rem;">${totalCraftCost.toFixed(2)}g</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.8em; color: #888; display: block;">Venta Neta (-5%)</span>
                        <strong style="color: #fff; font-size: 1.1rem;">${netRevenue.toFixed(2)}g</strong>
                    </div>
                    <div>
                        <span style="font-size: 0.8em; color: #888; display: block;">Ganancia Neta</span>
                        <strong style="color: ${profitColor}; font-size: 1.2rem;">${netProfit.toFixed(2)}g</strong>
                    </div>
                </div>
            </div>
        `;

    } catch (err) {
        resultsContainer.innerHTML = `<p style="color: #ff5252;">No se pudo conectar con el servidor backend.</p>`;
    }
});
