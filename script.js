const translations = {
    es: {
        title: "Calculadora de Crafteo WoW",
        btn: "Calcular Ganancias en Vivo",
        selectRealm: "Selecciona tu servidor...",
        defaultText: "Selecciona un servidor y una receta para consultar la Casa de Subastas..."
    },
    en: {
        title: "WoW Crafting Calculator",
        btn: "Calculate Live Profits",
        selectRealm: "Select your realm...",
        defaultText: "Select a realm and recipe to query the Auction House..."
    }
};

// Catálogo completo de recetas de The War Within con IDs oficiales de materiales y productos
const recipesDatabase = {
    // Alquimia
    "flask_alacrity": {
        prof: "alchemy",
        name: "Frasco de Pungente Alacridad",
        salePrice: 450,
        materials: [
            { id: 210815, name: "Flor de la peste", qty: 5 },
            { id: 210802, name: "Lirio pacífico", qty: 3 },
            { id: 210798, name: "Hoja de Ensueño", qty: 2 }
        ]
    },
    "flask_tempered": {
        prof: "alchemy",
        name: "Frasco de Furia Templada",
        salePrice: 520,
        materials: [
            { id: 210815, name: "Flor de la peste", qty: 6 },
            { id: 211503, name: "Frasco coalescente", qty: 2 }
        ]
    },
    "potion_cauldron": {
        prof: "alchemy",
        name: "Caldero de Alquimia de Batalla",
        salePrice: 3200,
        materials: [
            { id: 210815, name: "Flor de la peste", qty: 20 },
            { id: 210802, name: "Lirio pacífico", qty: 15 },
            { id: 211503, name: "Frasco coalescente", qty: 5 }
        ]
    },
    // Joyería
    "gem_culminating": {
        prof: "jewelcrafting",
        name: "Rubí Culpable Deslumbrante",
        salePrice: 600,
        materials: [
            { id: 213744, name: "Artesa", qty: 10 },
            { id: 213750, name: "Barra de veraplata", qty: 2 },
            { id: 213755, name: "Diamante de asedio", qty: 1 }
        ]
    },
    "neck_azure": {
        prof: "jewelcrafting",
        name: "Collar de Veraplata Encantado",
        salePrice: 1500,
        materials: [
            { id: 213750, name: "Barra de veraplata", qty: 6 },
            { id: 213760, name: "Esmeralda viviente", qty: 2 }
        ]
    },
    // Herrería
    "alloy_Bismuth": {
        prof: "blacksmithing",
        name: "Lingote de Bismuto Enriquecido",
        salePrice: 120,
        materials: [
            { id: 211100, name: "Mineral de Bismuto", qty: 10 },
            { id: 211105, name: "Mena fundida", qty: 2 }
        ]
    },
    "sword_epic": {
        prof: "blacksmithing",
        name: "Gran Espada de Saronita Pura",
        salePrice: 2800,
        materials: [
            { id: 211100, name: "Mineral de Bismuto", qty: 15 },
            { id: 211200, name: "Barra de titanio", qty: 4 },
            { id: 211250, name: "Hueso primordial", qty: 2 }
        ]
    },
    // Encantamiento
    "enchant_weapon": {
        prof: "enchanting",
        name: "Encantamiento de Arma: Divisa Flamígera",
        salePrice: 1850,
        materials: [
            { id: 224001, name: "Polvo abisal", qty: 8 },
            { id: 224005, name: "Esencia cósmica mayor", qty: 4 },
            { id: 224010, name: "Cristal de vacío", qty: 1 }
        ]
    },
    "enchant_ring": {
        prof: "enchanting",
        name: "Encantamiento de Anillo: Velocidad Radiante",
        salePrice: 950,
        materials: [
            { id: 224001, name: "Polvo abisal", qty: 5 },
            { id: 224005, name: "Esencia cósmica mayor", qty: 2 }
        ]
    },
    // Peletería
    "armor_kit": {
        prof: "leatherworking",
        name: "Kit de Armadura Reforzado",
        salePrice: 340,
        materials: [
            { id: 218001, name: "Cuero basto", qty: 8 },
            { id: 218005, name: "Escama endurecida", qty: 3 }
        ]
    },
    // Sastrería
    "cloth_bolt": {
        prof: "tailoring",
        name: "Rollo de Tela Crepuscular",
        salePrice: 180,
        materials: [
            { id: 219001, name: "Fibra crepuscular", qty: 10 }
        ]
    },
    // Ingeniería
    "tinker_item": {
        prof: "engineering",
        name: "Micro-ajustador Térmico",
        salePrice: 750,
        materials: [
            { id: 220001, name: "Tornillo de cobalto", qty: 6 },
            { id: 220005, name: "Muelle de precisión", qty: 2 }
        ]
    }
};

let cachedPrices = null;
let currentRealmRegion = null;
let currentFilter = "all";

// Poblar el menú desplegable inicial de recetas
function populateRecipes(filterProf = "all", searchTerm = "") {
    const selector = document.getElementById('recipe-selector');
    selector.innerHTML = '<option value="">Selecciona una receta del catálogo...</option>';

    for (const [key, recipe] of Object.entries(recipesDatabase)) {
        if (filterProf !== "all" && recipe.prof !== filterProf) continue;
        if (searchTerm && !recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) continue;

        const option = document.createElement('option');
        option.value = key;
        option.textContent = `[${recipe.prof.toUpperCase()}] ${recipe.name}`;
        selector.appendChild(option);
    }
}

// Eventos de filtrado por profesión
document.querySelectorAll('.prof-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.prof-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-prof');
        populateRecipes(currentFilter, document.getElementById('recipe-search').value);
    });
});

// Evento de búsqueda por texto
document.getElementById('recipe-search').addEventListener('input', (e) => {
    populateRecipes(currentFilter, e.target.value);
});

// Inicializar select al cargar
populateRecipes();

// Cambio de idioma de la interfaz
document.getElementById('lang-selector').addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang] || translations.es;
    document.getElementById('app-title').textContent = t.title;
    document.getElementById('calculate-btn').textContent = t.btn;
    document.getElementById('opt-default-realm').textContent = t.selectRealm;
    document.getElementById('default-text').textContent = t.defaultText;
});

// Acción principal de cálculo conectado a la AH
document.getElementById('calculate-btn').addEventListener('click', async () => {
    const realm = document.getElementById('realm-selector').value;
    const recipeKey = document.getElementById('recipe-selector').value;
    const resultsContainer = document.getElementById('results-container');

    if (!realm) {
        alert("Por favor, selecciona un servidor primero.");
        return;
    }
    if (!recipeKey) {
        alert("Por favor, selecciona una receta del catálogo.");
        return;
    }

    resultsContainer.innerHTML = `<p style="text-align: center; color: #ffb100; margin-top: 40px;">Sincronizando precios en tiempo real con la Casa de Subastas de Blizzard...</p>`;

    try {
        if (!cachedPrices || currentRealmRegion !== realm) {
            const response = await fetch(`/api/prices?realm=${realm}`);
            const data = await response.json();

            if (data.error) {
                resultsContainer.innerHTML = `<p style="color: var(--red);">Error: ${data.error}</p>`;
                return;
            }

            cachedPrices = data.prices;
            currentRealmRegion = realm;
        }

        const recipe = recipesDatabase[recipeKey];
        let totalCraftCost = 0;
        let materialsHtml = '';

        recipe.materials.forEach(mat => {
            const unitPrice = cachedPrices[mat.id] || 15.00; // Valor fallback si el ítem no tiene transacciones hoy
            const subtotal = unitPrice * mat.qty;
            totalCraftCost += subtotal;

            materialsHtml += `
                <tr>
                    <td>${mat.name} <span style="font-size: 0.75em; color: var(--text-muted);">(ID: ${mat.id})</span></td>
                    <td style="text-align: center;">${mat.qty}</td>
                    <td style="text-align: right;">${unitPrice.toFixed(2)}g</td>
                    <td style="text-align: right; color: var(--accent);">${subtotal.toFixed(2)}g</td>
                </tr>
            `;
        });

        const ahTax = recipe.salePrice * 0.05;
        const netRevenue = recipe.salePrice - ahTax;
        const netProfit = netRevenue - totalCraftCost;
        const profitColor = netProfit >= 0 ? 'var(--green)' : 'var(--red)';

        resultsContainer.innerHTML = `
            <div class="recipe-card">
                <h2 style="margin-top: 0; color: #fff; font-size: 1.3rem;">${recipe.name}</h2>
                <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">Servidor: <strong>${realm.toUpperCase()}</strong> | Comisión AH del juego (5%): <strong>${ahTax.toFixed(2)}g</strong></p>

                <table>
                    <thead>
                        <tr>
                            <th>Material / Componente</th>
                            <th style="text-align: center;">Cantidad</th>
                            <th style="text-align: right;">Precio Unit. (AH)</th>
                            <th style="text-align: right;">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${materialsHtml}
                    </tbody>
                </table>

                <div class="summary-grid">
                    <div class="summary-box">
                        <span>Costo de Materiales</span>
                        <strong style="color: var(--red);">${totalCraftCost.toFixed(2)}g</strong>
                    </div>
                    <div class="summary-box">
                        <span>Venta Neta (-5%)</span>
                        <strong style="color: #fff;">${netRevenue.toFixed(2)}g</strong>
                    </div>
                    <div class="summary-box">
                        <span>Ganancia Neta</span>
                        <strong style="color: ${profitColor};">${netProfit.toFixed(2)}g</strong>
                    </div>
                </div>
            </div>
        `;

    } catch (err) {
        resultsContainer.innerHTML = `<p style="color: var(--red); text-align: center;">No se pudo conectar con el servidor backend.</p>`;
    }
});
