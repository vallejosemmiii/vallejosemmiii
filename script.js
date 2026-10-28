document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            title: "WoW Crafting & Economy Hub",
            btn: "Calcular Ganancias en Vivo",
            selectRealm: "Selecciona tu servidor...",
            defaultText: "Selecciona un servidor y una receta para consultar la Casa de Subastas...",
            lblRealm: "Servidor de Juego:",
            lblCraftQty: "Cantidad a Craftear:",
            lblSearch: "Buscar Receta o Ítem:",
            lblRecipeSelect: "Seleccionar Receta Específica:",
            optDefaultRecipe: "Selecciona una receta del catálogo...",
            searchPlaceholder: "Ej. Frasco, Gema, Bismuto...",
            profAll: "Todas", profFav: "⭐ Favoritas", profAlchemy: "Alquimia", profJC: "Joyería",
            profBS: "Herrería", profEnc: "Encantamiento", profLW: "Peletería", profTail: "Sastrería", profEng: "Ingeniería",
            tableMaterial: "Material / Componente", tableQty: "Necesario", tableOwned: "Tienes", tablePrice: "Precio Unit. (AH)", tableSubtotal: "Subtotal",
            costMaterials: "Costo de Materiales", netSale: "Venta Neta (-5%)", netProfit: "Ganancia Neta", salePriceLabel: "Precio de Venta (AH):",
            syncing: "Sincronizando precios en tiempo real con la Casa de Subastas de Blizzard...",
            selectRealmAlert: "Por favor, selecciona un servidor primero.", selectRecipeAlert: "Por favor, selecciona una receta del catálogo.",
            copiedText: "¡Lista de compras copiada al portapapeles!",
            addedSession: "¡Añadido a la sesión de crafteo!"
        },
        en: {
            title: "WoW Crafting & Economy Hub",
            btn: "Calculate Live Profits",
            selectRealm: "Select your realm...",
            defaultText: "Select a realm and recipe to query the Auction House...",
            lblRealm: "Game Realm:", lblCraftQty: "Craft Quantity:", lblSearch: "Search Recipe or Item:",
            lblRecipeSelect: "Select Specific Recipe:", optDefaultRecipe: "Select a recipe from the catalog...", searchPlaceholder: "Ex. Flask, Gem...",
            profAll: "All", profFav: "⭐ Favorites", profAlchemy: "Alchemy", profJC: "Jewelcrafting",
            profBS: "Blacksmithing", profEnc: "Enchanting", profLW: "Leatherworking", profTail: "Tailoring", profEng: "Engineering",
            tableMaterial: "Material / Component", tableQty: "Required", tableOwned: "Owned", tablePrice: "Unit Price (AH)", tableSubtotal: "Subtotal",
            costMaterials: "Materials Cost", netSale: "Net Sale (-5%)", netProfit: "Net Profit", salePriceLabel: "Sale Price (AH):",
            syncing: "Synchronizing real-time prices with Blizzard Auction House...",
            selectRealmAlert: "Please select a realm first.", selectRecipeAlert: "Please select a recipe from the catalog.",
            copiedText: "Shopping list copied to clipboard!", addedSession: "Added to crafting session!"
        }
    };

    // CATÁLOGO MASIVO COMPLETO RESTAURADO Y AMPLIADO DE THE WAR WITHIN
    const recipesDatabase = {
        // --- ALQUIMIA ---
        "flask_alacrity": {
            prof: "alchemy", salePrice: 450,
            names: { es: "Frasco de Pungente Alacridad", en: "Flask of Pungent Alacrity" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb" }, source: { es: "🌱 Herboristería: Isla Dorn", en: "🌱 Herbalism" }, qty: 5 },
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom" }, source: { es: "🌱 Herboristería general", en: "🌱 Herbalism" }, qty: 3 },
                { id: 210798, names: { es: "Hoja de Ensueño", en: "Dreamleaf" }, source: { es: "🌱 Herboristería: Val'sharah", en: "🌱 Herbalism" }, qty: 2 }
            ]
        },
        "flask_tempered": {
            prof: "alchemy", salePrice: 520,
            names: { es: "Frasco de Furia Templada", en: "Flask of Tempered Fury" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 6 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial" }, source: { es: "🧪 Proveedor de Alquimia", en: "🧪 Alchemy Vendor" }, qty: 2 }
            ]
        },
        "potion_cauldron": {
            prof: "alchemy", salePrice: 3200,
            names: { es: "Caldero de Alquimia de Batalla", en: "Battle Alchemist's Cauldron" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 20 },
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 15 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial" }, source: { es: "🧪 Proveedor", en: "🧪 Vendor" }, qty: 5 }
            ]
        },
        "potion_tauri": {
            prof: "alchemy", salePrice: 210,
            names: { es: "Poción de Velocidad Ciclópea", en: "Cyclopean Speed Potion" },
            materials: [
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 4 },
                { id: 210798, names: { es: "Hoja de Ensueño", en: "Dreamleaf" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 2 }
            ]
        },
        "potion_ultimate": {
            prof: "alchemy", salePrice: 650,
            names: { es: "Poción de Poder Definitivo", en: "Ultimate Power Potion" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb" }, source: { es: "🌱 Herboristería", en: "🌱 Herbalism" }, qty: 8 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial" }, source: { es: "🧪 Proveedor", en: "🧪 Vendor" }, qty: 3 }
            ]
        },

        // --- JOYERÍA ---
        "gem_culminating": {
            prof: "jewelcrafting", salePrice: 600,
            names: { es: "Rubí Culpable Deslumbrante", en: "Culminating Blasphemite" },
            materials: [
                { id: 213744, names: { es: "Artesa (Bismuto)", en: "Bismuth" }, source: { es: "⛏️ Minería: The Ringing Deeps", en: "⛏️ Mining" }, qty: 10 },
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 2 },
                { id: 213755, names: { es: "Diamante de asedio", en: "Onyx" }, source: { es: "👾 Drop: Elementales", en: "👾 Drop" }, qty: 1 }
            ]
        },
        "neck_azure": {
            prof: "jewelcrafting", salePrice: 1500,
            names: { es: "Collar de Veraplata Encantado", en: "Gilded Truesilver Necklace" },
            materials: [
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 6 },
                { id: 213760, names: { es: "Esmeralda viviente", en: "Culminating Gem" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 2 }
            ]
        },
        "gem_quick": {
            prof: "jewelcrafting", salePrice: 480,
            names: { es: "Ónix Sibilante Rápido", en: "Quick Sibilant Onyx" },
            materials: [
                { id: 213744, names: { es: "Artesa (Bismuto)", en: "Bismuth" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 8 },
                { id: 213760, names: { es: "Esmeralda viviente", en: "Culminating Gem" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 1 }
            ]
        },
        "ring_master": {
            prof: "jewelcrafting", salePrice: 2200,
            names: { es: "Sello de Maestría Estelar", en: "Stellar Mastery Signet" },
            materials: [
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 8 },
                { id: 213755, names: { es: "Diamante de asedio", en: "Onyx" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 2 }
            ]
        },

        // --- HERRERÍA ---
        "alloy_Bismuth": {
            prof: "blacksmithing", salePrice: 120,
            names: { es: "Lingote de Bismuto Enriquecido", en: "Bismuth Alloy" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining" }, qty: 10 },
                { id: 211105, names: { es: "Mena fundida", en: "Molten Slag" }, source: { es: "👾 Drop: Mobs mecánicos", en: "👾 Drop" }, qty: 2 }
            ]
        },
        "sword_epic": {
            prof: "blacksmithing", salePrice: 2800,
            names: { es: "Gran Espada de Saronita Pura", en: "Bismuth Greatsword" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 15 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 4 },
                { id: 211250, names: { es: "Hueso primordial", en: "Primordial Bone" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 2 }
            ]
        },
        "shield_heavy": {
            prof: "blacksmithing", salePrice: 1950,
            names: { es: "Pavés de Acero Real", en: "Royal Steel Pavise" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 12 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 3 }
            ]
        },
        "cuirass_plate": {
            prof: "blacksmithing", salePrice: 3500,
            names: { es: "Coraza de Batalla Inquebrantable", en: "Unbreakable Battle Cuirass" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore" }, source: { es: "⛏️ Minería", en: "⛏️ Mining" }, qty: 20 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 6 }
            ]
        },

        // --- ENCANTAMIENTO ---
        "enchant_weapon": {
            prof: "enchanting", salePrice: 1850,
            names: { es: "Encantamiento de Arma: Divisa Flamígera", en: "Enchant Weapon - Authority" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust" }, source: { es: "✨ Desencantar verde", en: "✨ Disenchanting" }, qty: 8 },
                { id: 224005, names: { es: "Esencia cósmica mayor", en: "Shimmering Crystal" }, source: { es: "✨ Desencantar azul", en: "✨ Disenchanting" }, qty: 4 },
                { id: 224010, names: { es: "Cristal de vacío", en: "Eternium Dust" }, source: { es: "✨ Desencantar épico", en: "✨ Disenchanting" }, qty: 1 }
            ]
        },
        "enchant_ring": {
            prof: "enchanting", salePrice: 950,
            names: { es: "Encantamiento de Anillo: Velocidad Radiante", en: "Enchant Ring - Radiant Speed" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust" }, source: { es: "✨ Desencantar", en: "✨ Disenchanting" }, qty: 5 },
                { id: 224005, names: { es: "Esencia cósmica mayor", en: "Shimmering Crystal" }, source: { es: "✨ Desencantar", en: "✨ Disenchanting" }, qty: 2 }
            ]
        },
        "enchant_cloak": {
            prof: "enchanting", salePrice: 720,
            names: { es: "Encantamiento de Capa: Gracia Alada", en: "Enchant Cloak - Winged Grace" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust" }, source: { es: "✨ Desencantar", en: "✨ Disenchanting" }, qty: 4 },
                { id: 224010, names: { es: "Cristal de vacío", en: "Eternium Dust" }, source: { es: "✨ Desencantar", en: "✨ Disenchanting" }, qty: 1 }
            ]
        },

        // --- PELETERÍA ---
        "armor_kit": {
            prof: "leatherworking", salePrice: 340,
            names: { es: "Kit de Armadura Reforzado", en: "Reinforced Armor Kit" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather" }, source: { es: "🔪 Desuello: Bestias", en: "🔪 Skinning" }, qty: 8 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale" }, source: { es: "🔪 Desuello", en: "🔪 Skinning" }, qty: 3 }
            ]
        },
        "boots_leather": {
            prof: "leatherworking", salePrice: 1600,
            names: { es: "Botas de Merodeador Sombrío", en: "Shadow Prowler Boots" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather" }, source: { es: "🔪 Desuello", en: "🔪 Skinning" }, qty: 12 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale" }, source: { es: "🔪 Desuello", en: "🔪 Skinning" }, qty: 4 }
            ]
        },
        "legs_scaled": {
            prof: "leatherworking", salePrice: 2900,
            names: { es: "Pantalones de Escama Feroz", en: "Fierce Scaled Leggings" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather" }, source: { es: "🔪 Desuello", en: "🔪 Skinning" }, qty: 16 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale" }, source: { es: "🔪 Desuello", en: "🔪 Skinning" }, qty: 6 }
            ]
        },

        // --- SASTRERÍA ---
        "cloth_bolt": {
            prof: "tailoring", salePrice: 180,
            names: { es: "Rollo de Tela Crepuscular", en: "Bolt of Weavecloth" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth" }, source: { es: "👾 Drop: Humanoides", en: "👾 Drop" }, qty: 10 }
            ]
        },
        "robe_spellfire": {
            prof: "tailoring", salePrice: 2400,
            names: { es: "Vestimentas de Tejefuego", en: "Spellfire Robes" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 16 },
                { id: 219005, names: { es: "Seda tejida de éter", en: "Ether Silk" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 4 }
            ]
        },
        "mantle_weave": {
            prof: "tailoring", salePrice: 1850,
            names: { es: "Manto de Hilado Arcano", en: "Arcane Spun Mantle" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 12 },
                { id: 219005, names: { es: "Seda tejida de éter", en: "Ether Silk" }, source: { es: "👾 Drop", en: "👾 Drop" }, qty: 3 }
            ]
        },

        // --- INGENIERÍA ---
        "tinker_item": {
            prof: "engineering", salePrice: 750,
            names: { es: "Micro-ajustador Térmico", en: "Scope / Tinker Component" },
            materials: [
                { id: 220001, names: { es: "Tornillo de cobalto", en: "Bolt" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering" }, qty: 6 },
                { id: 220005, names: { es: "Muelle de precisión", en: "Spring" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering" }, qty: 2 }
            ]
        },
        "goggles_eng": {
            prof: "engineering", salePrice: 2100,
            names: { es: "Gafas de Espectro Óptico", en: "Optical Spectrum Goggles" },
            materials: [
                { id: 220001, names: { es: "Tornillo de cobalto", en: "Bolt" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering" }, qty: 10 },
                { id: 220005, names: { es: "Muelle de precisión", en: "Spring" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering" }, qty: 4 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar" }, source: { es: "🔨 Fundición", en: "🔨 Smelting" }, qty: 2 }
            ]
        }
    };

    let cachedPrices = null;
    let currentRealmRegion = null;
    let currentFilter = "all";
    let craftingSession = [];

    // Cargar configuraciones guardadas en localStorage
    const savedTheme = localStorage.getItem('wow_theme') || 'goblin';
    document.body.className = `theme-${savedTheme}`;
    document.getElementById('theme-selector').value = savedTheme;

    const savedRealm = localStorage.getItem('wow_realm');
    if (savedRealm) document.getElementById('realm-selector').value = savedRealm;

    const savedRegion = localStorage.getItem('wow_region');
    if (savedRegion) document.getElementById('region-selector').value = savedRegion;

    // Cambiar Tema
    document.getElementById('theme-selector').addEventListener('change', (e) => {
        const theme = e.target.value;
        document.body.className = `theme-${theme}`;
        localStorage.setItem('wow_theme', theme);
    });

    document.getElementById('realm-selector').addEventListener('change', (e) => {
        localStorage.setItem('wow_realm', e.target.value);
    });

    document.getElementById('region-selector').addEventListener('change', (e) => {
        localStorage.setItem('wow_region', e.target.value);
    });

    // Pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            const target = e.target.getAttribute('data-tab');
            e.target.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    function getFavorites() {
        try { return JSON.parse(localStorage.getItem('wow_favs')) || []; } catch (e) { return []; }
    }

    function toggleFavorite(key) {
        let favs = getFavorites();
        if (favs.includes(key)) { favs = favs.filter(i => i !== key); } else { favs.push(key); }
        localStorage.setItem('wow_favs', JSON.stringify(favs));
        populateRecipes(currentFilter, document.getElementById('recipe-search')?.value || '');
    }

    function getLang() { return document.getElementById('lang-selector')?.value || 'es'; }

    function populateRecipes(filterProf = "all", searchTerm = "") {
        const lang = getLang();
        const selector = document.getElementById('recipe-selector');
        if (!selector) return;
        
        selector.innerHTML = `<option value="">Selecciona una receta del catálogo...</option>`;
        const favs = getFavorites();

        for (const [key, recipe] of Object.entries(recipesDatabase)) {
            if (filterProf === "favorites" && !favs.includes(key)) continue;
            if (filterProf !== "all" && filterProf !== "favorites" && recipe.prof !== filterProf) continue;
            
            const recipeName = recipe.names[lang] || recipe.names['es'];
            if (searchTerm && !recipeName.toLowerCase().includes(searchTerm.toLowerCase())) continue;

            const isFav = favs.includes(key);
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${isFav ? '⭐ ' : ''}[${recipe.prof.toUpperCase()}] ${recipeName}`;
            selector.appendChild(option);
        }
    }

    document.querySelectorAll('.prof-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.prof-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-prof');
            populateRecipes(currentFilter, document.getElementById('recipe-search')?.value || '');
        });
    });

    document.getElementById('recipe-search')?.addEventListener('input', (e) => {
        populateRecipes(currentFilter, e.target.value);
    });

    populateRecipes();

    // RENDERIZAR CALCULADORA CON ROI Y MÉTRICAS DE LOTE
    function renderCalculator(recipe, recipeKey, realm, prices, t, customSalePrice = null) {
        const resultsContainer = document.getElementById('results-container');
        if (!resultsContainer) return;

        const lang = getLang();
        const recipeName = recipe.names[lang] || recipe.names['es'];
        const multiplier = parseInt(document.getElementById('craft-qty-multiplier')?.value || 1);
        const salePrice = (customSalePrice !== null ? customSalePrice : recipe.salePrice) * multiplier;

        let totalCraftCost = 0;
        let materialsHtml = '';
        let missingList = [];
        const favs = getFavorites();
        const isFav = favs.includes(recipeKey);

        recipe.materials.forEach((mat, index) => {
            const unitPrice = prices[mat.id] || 15.00;
            const requiredQty = mat.qty * multiplier;
            const matName = mat.names[lang] || mat.names['es'];
            const sourceText = mat.source[lang] || mat.source['es'];

            const existingInput = document.getElementById(`owned-${index}`);
            const ownedQty = existingInput ? Math.max(0, parseInt(existingInput.value) || 0) : 0;
            const effectiveQty = Math.max(0, requiredQty - ownedQty);

            if (effectiveQty > 0) missingList.push(`${effectiveQty}x ${matName}`);

            const subtotal = unitPrice * effectiveQty;
            totalCraftCost += subtotal;

            materialsHtml += `
                <tr>
                    <td>
                        <div style="font-weight: 600;">${matName}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${sourceText}</div>
                    </td>
                    <td style="text-align: center;">${requiredQty}</td>
                    <td style="text-align: center;">
                        <input type="number" min="0" value="${ownedQty}" class="input-owned" id="owned-${index}" data-index="${index}">
                    </td>
                    <td style="text-align: right;">${unitPrice.toFixed(2)}g</td>
                    <td style="text-align: right; color: var(--accent-gold); font-weight: 600;" id="subtotal-${index}">${subtotal.toFixed(2)}g</td>
                </tr>
            `;
        });

        const ahTax = salePrice * 0.05;
        const netRevenue = salePrice - ahTax;
        const netProfit = netRevenue - totalCraftCost;
        const marginPercent = totalCraftCost > 0 ? (netProfit / totalCraftCost) * 100 : 0;
        const roi = totalCraftCost > 0 ? ((netRevenue / totalCraftCost) * 100).toFixed(1) : 0;

        let statusBadge = netProfit < 0 ? 
            `<span class="badge-thermometer badge-red">🛑 En Pérdida (${marginPercent.toFixed(1)}%)</span>` :
            (marginPercent > 25 ? `<span class="badge-thermometer badge-green">🔥 Altamente Rentable (+${marginPercent.toFixed(1)}%)</span>` :
            `<span class="badge-thermometer badge-yellow">⚠️ Margen Moderado (+${marginPercent.toFixed(1)}%)</span>`);

        resultsContainer.innerHTML = `
            <div class="recipe-card">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <button class="fav-btn ${isFav ? 'active' : ''}" id="toggle-fav-btn" title="Favorita">⭐</button>
                        <div>
                            <h2 style="margin: 0; color: #fff; font-size: 1.4rem;">${recipeName} (x${multiplier})</h2>
                            ${statusBadge}
                        </div>
                    </div>
                    <div>
                        <label style="font-size: 0.85em; color: var(--text-muted); font-weight: 600;">${t.salePriceLabel}</label>
                        <input type="number" id="custom-sale-price" class="input-price" value="${salePrice}">
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>${t.tableMaterial}</th>
                            <th style="text-align: center;">${t.tableQty}</th>
                            <th style="text-align: center;">${t.tableOwned}</th>
                            <th style="text-align: right;">${t.tablePrice}</th>
                            <th style="text-align: right;">${t.tableSubtotal}</th>
                        </tr>
                    </thead>
                    <tbody>${materialsHtml}</tbody>
                </table>

                <div class="summary-grid">
                    <div class="summary-box"><span>${t.costMaterials}</span><strong style="color: var(--red);">${totalCraftCost.toFixed(2)}g</strong></div>
                    <div class="summary-box"><span>${t.netSale}</span><strong style="color: #fff;">${netRevenue.toFixed(2)}g</strong></div>
                    <div class="summary-box"><span>${t.netProfit}</span><strong style="color: ${netProfit >= 0 ? 'var(--green)' : 'var(--red)'};">${netProfit.toFixed(2)}g</strong></div>
                    <div class="summary-box"><span>Retorno (ROI)</span><strong style="color: var(--accent-gold);">${roi}%</strong></div>
                </div>

                <div class="action-row-buttons">
                    <button id="btn-copy-shopping" class="secondary-btn">📋 Copiar Lista de Compras</button>
                    <button id="btn-add-session" class="secondary-btn">➕ Sumar a Sesión de Crafteo</button>
                </div>
            </div>
        `;

        document.getElementById('toggle-fav-btn')?.addEventListener('click', () => {
            toggleFavorite(recipeKey);
            renderCalculator(recipe, recipeKey, realm, prices, t, customSalePrice);
        });

        document.getElementById('btn-copy-shopping')?.addEventListener('click', () => {
            navigator.clipboard.writeText(missingList.length > 0 ? missingList.join(', ') : '¡Tienes todos los materiales!');
            alert(t.copiedText);
        });

        document.getElementById('btn-add-session')?.addEventListener('click', () => {
            craftingSession.push({ name: recipeName, qty: multiplier, cost: totalCraftCost, profit: netProfit });
            updateSessionUI();
            alert(t.addedSession);
        });
    }

    function updateSessionUI() {
        const countEl = document.getElementById('session-count');
        const costEl = document.getElementById('session-cost');
        const profitEl = document.getElementById('session-profit');
        const listEl = document.getElementById('session-list');

        let totalCost = 0, totalProfit = 0;
        let html = '<table><thead><tr><th>Receta</th><th style="text-align:center;">Lotes</th><th style="text-align:right;">Costo</th><th style="text-align:right;">Ganancia Est.</th></tr></thead><tbody>';

        craftingSession.forEach(item => {
            totalCost += item.cost;
            totalProfit += item.profit;
            html += `<tr><td>${item.name}</td><td style="text-align:center;">x${item.qty}</td><td style="text-align:right; color:var(--red);">${item.cost.toFixed(2)}g</td><td style="text-align:right; color:var(--green);">${item.profit.toFixed(2)}g</td></tr>`;
        });

        html += '</tbody></table>';
        if (countEl) countEl.textContent = craftingSession.length;
        if (costEl) costEl.textContent = `${totalCost.toFixed(2)}g`;
        if (profitEl) profitEl.textContent = `${totalProfit.toFixed(2)}g`;
        if (listEl) listEl.innerHTML = craftingSession.length > 0 ? html : '<p style="color:var(--text-muted); text-align:center;">No hay crafteos registrados aún en esta sesión.</p>';
    }

    document.getElementById('btn-clear-session')?.addEventListener('click', () => {
        craftingSession = [];
        updateSessionUI();
    });

    // PRESUPUESTO CON ALERTA DE FAVORITOS
    document.getElementById('btn-run-budget')?.addEventListener('click', async () => {
        const realm = document.getElementById('realm-selector').value;
        const budget = parseFloat(document.getElementById('budget-input').value) || 0;
        const resultsEl = document.getElementById('budget-results');

        if (!realm) return alert('Selecciona un servidor primero.');
        resultsEl.innerHTML = '<p style="color: var(--accent-gold); text-align: center;">Analizando recetas según tu presupuesto...</p>';

        try {
            if (!cachedPrices || currentRealmRegion !== realm) {
                const res = await fetch(`/api/prices?realm=${realm}`);
                const data = await res.json();
                cachedPrices = data.prices;
                currentRealmRegion = realm;
            }

            let html = '<table><thead><tr><th>Receta</th><th style="text-align:right;">Costo Crafteo</th><th style="text-align:right;">Ganancia Est.</th></tr></thead><tbody>';
            const lang = getLang();
            const favs = getFavorites();
            let matched = 0;

            for (const [key, recipe] of Object.entries(recipesDatabase)) {
                let cost = 0;
                recipe.materials.forEach(m => cost += (cachedPrices[m.id] || 15) * m.qty);
                const netRev = recipe.salePrice * 0.95;
                const profit = netRev - cost;

                if (cost <= budget && profit > 0) {
                    matched++;
                    const isFav = favs.includes(key);
                    html += `<tr><td>${isFav ? '⭐ ' : ''}<strong>${recipe.names[lang] || recipe.names.es}</strong></td><td style="text-align:right;">${cost.toFixed(2)}g</td><td style="text-align:right; color:var(--green); font-weight:700;">+${profit.toFixed(2)}g</td></tr>`;
                }
            }
            html += '</tbody></table>';
            resultsEl.innerHTML = matched > 0 ? html : '<p style="color: var(--text-muted); text-align: center;">No se encontraron recetas rentables con ese presupuesto.</p>';
        } catch (err) {
            resultsEl.innerHTML = '<p style="color: var(--red); text-align: center;">Error al conectar con el servidor.</p>';
        }
    });

    // DETECTOR DE FLIPS
    document.getElementById('btn-run-flips')?.addEventListener('click', async () => {
        const realm = document.getElementById('realm-selector').value;
        const resultsEl = document.getElementById('flips-results');

        if (!realm) return alert('Selecciona un servidor primero.');
        resultsEl.innerHTML = '<p style="color: var(--accent-gold); text-align: center;">Escaneando el mercado en busca de oportunidades de arbitraje y flips...</p>';

        try {
            if (!cachedPrices || currentRealmRegion !== realm) {
                const res = await fetch(`/api/prices?realm=${realm}`);
                const data = await res.json();
                cachedPrices = data.prices;
                currentRealmRegion = realm;
            }

            const flipRecipes = [
                { key: "alloy_Bismuth", name: "Lingote de Bismuto Enriquecido (Aleación)" },
                { key: "armor_kit", name: "Kit de Armadura Reforzado" }
            ];

            let html = '<table><thead><tr><th>Operación de Flip / Transformación</th><th style="text-align:right;">Costo</th><th style="text-align:right;">Ganancia Limpia</th></tr></thead><tbody>';
            flipRecipes.forEach(flip => {
                const rec = recipesDatabase[flip.key];
                if (!rec) return;
                let cost = 0;
                rec.materials.forEach(m => cost += (cachedPrices[m.id] || 15) * m.qty);
                const profit = (rec.salePrice * 0.95) - cost;
                html += `<tr><td><strong>${flip.name}</strong></td><td style="text-align:right; color: var(--red);">${cost.toFixed(2)}g</td><td style="text-align:right; color: ${profit >= 0 ? 'var(--green)' : 'var(--red)'}; font-weight: 700;">${profit >= 0 ? '+' : ''}${profit.toFixed(2)}g</td></tr>`;
            });
            html += '</tbody></table>';
            resultsEl.innerHTML = html;
        } catch (err) {
            resultsEl.innerHTML = '<p style="color: var(--red); text-align: center;">Error al escanear los precios.</p>';
        }
    });

    // BOTÓN PRINCIPAL
    document.getElementById('calculate-btn')?.addEventListener('click', async () => {
        const realm = document.getElementById('realm-selector').value;
        const recipeKey = document.getElementById('recipe-selector').value;
        const t = translations[getLang()] || translations.es;

        if (!realm) return alert(t.selectRealmAlert);
        if (!recipeKey) return alert(t.selectRecipeAlert);

        try {
            if (!cachedPrices || currentRealmRegion !== realm) {
                const res = await fetch(`/api/prices?realm=${realm}`);
                const data = await res.json();
                cachedPrices = data.prices;
                currentRealmRegion = realm;
            }

            renderCalculator(recipesDatabase[recipeKey], recipeKey, realm, cachedPrices, t);
        } catch (err) {
            document.getElementById('results-container').innerHTML = '<p style="color: var(--red); text-align: center;">No se pudo conectar con el servidor.</p>';
        }
    });
});
