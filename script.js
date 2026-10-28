document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            title: "Calculadora de Crafteo WoW",
            btn: "Calcular Ganancias en Vivo",
            selectRealm: "Selecciona tu servidor...",
            defaultText: "Selecciona un servidor y una receta para consultar la Casa de Subastas...",
            lblRealm: "Servidor de Juego:",
            lblCraftQty: "Cantidad a Craftear:",
            lblSearch: "Buscar Receta o Ítem:",
            lblRecipeSelect: "Seleccionar Receta Específica:",
            optDefaultRecipe: "Selecciona una receta del catálogo...",
            searchPlaceholder: "Ej. Frasco, Gema...",
            profAll: "Todas",
            profFav: "⭐ Favoritas",
            profAlchemy: "Alquimia",
            profJC: "Joyería",
            profBS: "Herrería",
            profEnc: "Encantamiento",
            profLW: "Peletería",
            profTail: "Sastrería",
            profEng: "Ingeniería",
            tableMaterial: "Material / Componente",
            tableQty: "Necesario",
            tableOwned: "Tienes",
            tablePrice: "Precio Unit. (AH)",
            tableSubtotal: "Subtotal",
            costMaterials: "Costo de Materiales",
            netSale: "Venta Neta (-5%)",
            netProfit: "Ganancia Neta",
            salePriceLabel: "Precio de Venta (AH):",
            syncing: "Sincronizando precios en tiempo real con la Casa de Subastas de Blizzard...",
            selectRealmAlert: "Por favor, selecciona un servidor primero.",
            selectRecipeAlert: "Por favor, selecciona una receta del catálogo.",
            errorTitle: "Error:",
            connectionError: "No se pudo conectar con el servidor backend."
        },
        en: {
            title: "WoW Crafting Calculator",
            btn: "Calculate Live Profits",
            selectRealm: "Select your realm...",
            defaultText: "Select a realm and recipe to query the Auction House...",
            lblRealm: "Game Realm:",
            lblCraftQty: "Craft Quantity:",
            lblSearch: "Search Recipe or Item:",
            lblRecipeSelect: "Select Specific Recipe:",
            optDefaultRecipe: "Select a recipe from the catalog...",
            searchPlaceholder: "Ex. Flask, Gem...",
            profAll: "All",
            profFav: "⭐ Favorites",
            profAlchemy: "Alchemy",
            profJC: "Jewelcrafting",
            profBS: "Blacksmithing",
            profEnc: "Enchanting",
            profLW: "Leatherworking",
            profTail: "Tailoring",
            profEng: "Engineering",
            tableMaterial: "Material / Component",
            tableQty: "Required",
            tableOwned: "Owned",
            tablePrice: "Unit Price (AH)",
            tableSubtotal: "Subtotal",
            costMaterials: "Materials Cost",
            netSale: "Net Sale (-5%)",
            netProfit: "Net Profit",
            salePriceLabel: "Sale Price (AH):",
            syncing: "Synchronizing real-time prices with the Blizzard Auction House...",
            selectRealmAlert: "Please select a realm first.",
            selectRecipeAlert: "Please select a recipe from the catalog.",
            errorTitle: "Error:",
            connectionError: "Could not connect to the backend server."
        },
        de: {
            title: "WoW Handwerks-Rechner",
            btn: "Live-Gewinn berechnen",
            selectRealm: "Wähle deinen Server...",
            defaultText: "Wähle einen Server und ein Rezept, um das Auktionshaus abzufragen...",
            lblRealm: "Spielserver:",
            lblCraftQty: "Herstellungsmenge:",
            lblSearch: "Rezept oder Gegenstand suchen:",
            lblRecipeSelect: "Spezifisches Rezept auswählen:",
            optDefaultRecipe: "Wähle ein Rezept aus dem Katalog...",
            searchPlaceholder: "Bsp. Fläschchen...",
            profAll: "Alle",
            profFav: "⭐ Favoriten",
            profAlchemy: "Alchemie",
            profJC: "Juwelenschleifen",
            profBS: "Schmiedekunst",
            profEnc: "Verzauberkunst",
            profLW: "Lederverarbeitung",
            profTail: "Schneiderei",
            profEng: "Ingenieurskunst",
            tableMaterial: "Material / Komponente",
            tableQty: "Benötigt",
            tableOwned: "Vorrat",
            tablePrice: "Stückpreis (AH)",
            tableSubtotal: "Zwischensumme",
            costMaterials: "Materialkosten",
            netSale: "Nettoverkauf (-5%)",
            netProfit: "Nettogewinn",
            salePriceLabel: "Verkaufspreis (AH):",
            syncing: "Echtzeitpreise werden mit dem Blizzard-Auktionshaus synchronisiert...",
            selectRealmAlert: "Bitte wähle zuerst einen Server aus.",
            selectRecipeAlert: "Bitte wähle ein Rezept aus dem Katalog aus.",
            errorTitle: "Fehler:",
            connectionError: "Verbindung zum Backend-Server fehlgeschlagen."
        },
        fr: {
            title: "Calculateur d'Artisanat WoW",
            btn: "Calculer les Bénéfices en Direct",
            selectRealm: "Sélectionnez votre royaume...",
            defaultText: "Sélectionnez un royaume et une recette pour interroger l'Hôtel des Ventes...",
            lblRealm: "Royaume de jeu:",
            lblCraftQty: "Quantité à fabriquer:",
            lblSearch: "Rechercher une recette ou un objet:",
            lblRecipeSelect: "Sélectionner une recette spécifique:",
            optDefaultRecipe: "Sélectionnez une recette dans le catalogue...",
            searchPlaceholder: "Ex. Flacon...",
            profAll: "Toutes",
            profFav: "⭐ Favoris",
            profAlchemy: "Alchimie",
            profJC: "Joaillerie",
            profBS: "Forge",
            profEnc: "Enchantement",
            profLW: "Travail du cuir",
            profTail: "Couture",
            profEng: "Ingénierie",
            tableMaterial: "Matériau / Composant",
            tableQty: "Requis",
            tableOwned: "En stock",
            tablePrice: "Prix Unitaire (HDV)",
            tableSubtotal: "Sous-total",
            costMaterials: "Coût des Matériaux",
            netSale: "Vente Nette (-5%)",
            netProfit: "Bénéfice Net",
            salePriceLabel: "Prix de Vente (HDV):",
            syncing: "Synchronisation des prix en temps réel avec l'Hôtel des Ventes Blizzard...",
            selectRealmAlert: "Veuillez d'abord sélectionner un royaume.",
            selectRecipeAlert: "Veuillez sélectionner une recette dans le catalogue.",
            errorTitle: "Erreur :",
            connectionError: "Impossible de se connecter au serveur backend."
        },
        pt: {
            title: "Calculadora de Crafting WoW",
            btn: "Calcular Lucros ao Vivo",
            selectRealm: "Selecione seu reino...",
            defaultText: "Selecione um reino e uma receita para consultar a Casa de Leilões...",
            lblRealm: "Reino de Jogo:",
            lblCraftQty: "Quantidade a Produzir:",
            lblSearch: "Pesquisar Receita ou Item:",
            lblRecipeSelect: "Selecionar Receita Específica:",
            optDefaultRecipe: "Selecione uma receita do catálogo...",
            searchPlaceholder: "Ex. Frasco, Gema...",
            profAll: "Todas",
            profFav: "⭐ Favoritos",
            profAlchemy: "Alquimia",
            profJC: "Joalheria",
            profBS: "Ferraria",
            profEnc: "Encantamento",
            profLW: "Couraria",
            profTail: "Alfaiataria",
            profEng: "Engenharia",
            tableMaterial: "Material / Componente",
            tableQty: "Necessário",
            tableOwned: "Possui",
            tablePrice: "Preço Unit. (AH)",
            tableSubtotal: "Subtotal",
            costMaterials: "Custo de Materiais",
            netSale: "Venda Líquida (-5%)",
            netProfit: "Lucro Líquido",
            salePriceLabel: "Preço de Venda (AH):",
            syncing: "Sincronizando preços em tempo real com a Casa de Leilões da Blizzard...",
            selectRealmAlert: "Por favor, selecione um reino primeiro.",
            selectRecipeAlert: "Por favor, selecione uma receita do catálogo.",
            errorTitle: "Erro:",
            connectionError: "Não foi possível conectar ao servidor backend."
        }
    };

    // Catálogo masivo y ampliado de The War Within
    const recipesDatabase = {
        "flask_alacrity": { prof: "alchemy", name: "Frasco de Pungente Alacridad", salePrice: 450, materials: [{ id: 210815, name: "Flor de la peste", qty: 5 }, { id: 210802, name: "Lirio pacífico", qty: 3 }, { id: 210798, name: "Hoja de Ensueño", qty: 2 }] },
        "flask_tempered": { prof: "alchemy", name: "Frasco de Furia Templada", salePrice: 520, materials: [{ id: 210815, name: "Flor de la peste", qty: 6 }, { id: 211503, name: "Frasco coalescente", qty: 2 }] },
        "potion_cauldron": { prof: "alchemy", name: "Caldero de Alquimia de Batalla", salePrice: 3200, materials: [{ id: 210815, name: "Flor de la peste", qty: 20 }, { id: 210802, name: "Lirio pacífico", qty: 15 }, { id: 211503, name: "Frasco coalescente", qty: 5 }] },
        "potion_tauri": { prof: "alchemy", name: "Poción de Velocidad Ciclópea", salePrice: 210, materials: [{ id: 210802, name: "Lirio pacífico", qty: 4 }, { id: 210798, name: "Hoja de Ensueño", qty: 2 }] },
        "potion_ultimate": { prof: "alchemy", name: "Poción de Poder Definitivo", salePrice: 650, materials: [{ id: 210815, name: "Flor de la peste", qty: 8 }, { id: 211503, name: "Frasco coalescente", qty: 3 }] },
        
        "gem_culminating": { prof: "jewelcrafting", name: "Rubí Culpable Deslumbrante", salePrice: 600, materials: [{ id: 213744, name: "Artesa", qty: 10 }, { id: 213750, name: "Barra de veraplata", qty: 2 }, { id: 213755, name: "Diamante de asedio", qty: 1 }] },
        "neck_azure": { prof: "jewelcrafting", name: "Collar de Veraplata Encantado", salePrice: 1500, materials: [{ id: 213750, name: "Barra de veraplata", qty: 6 }, { id: 213760, name: "Esmeralda viviente", qty: 2 }] },
        "gem_quick": { prof: "jewelcrafting", name: "Ónix Sibilante Rápido", salePrice: 480, materials: [{ id: 213744, name: "Artesa", qty: 8 }, { id: 213760, name: "Esmeralda viviente", qty: 1 }] },
        "ring_master": { prof: "jewelcrafting", name: "Sello de Maestría Estelar", salePrice: 2200, materials: [{ id: 213750, name: "Barra de veraplata", qty: 8 }, { id: 213755, name: "Diamante de asedio", qty: 2 }] },

        "alloy_Bismuth": { prof: "blacksmithing", name: "Lingote de Bismuto Enriquecido", salePrice: 120, materials: [{ id: 211100, name: "Mineral de Bismuto", qty: 10 }, { id: 211105, name: "Mena fundida", qty: 2 }] },
        "sword_epic": { prof: "blacksmithing", name: "Gran Espada de Saronita Pura", salePrice: 2800, materials: [{ id: 211100, name: "Mineral de Bismuto", qty: 15 }, { id: 211200, name: "Barra de titanio", qty: 4 }, { id: 211250, name: "Hueso primordial", qty: 2 }] },
        "shield_heavy": { prof: "blacksmithing", name: "Pavés de Acero Real", salePrice: 1950, materials: [{ id: 211100, name: "Mineral de Bismuto", qty: 12 }, { id: 211200, name: "Barra de titanio", qty: 3 }] },
        "cuirass_plate": { prof: "blacksmithing", name: "Coraza de Batalla Inquebrantable", salePrice: 3500, materials: [{ id: 211100, name: "Mineral de Bismuto", qty: 20 }, { id: 211200, name: "Barra de titanio", qty: 6 }] },

        "enchant_weapon": { prof: "enchanting", name: "Encantamiento de Arma: Divisa Flamígera", salePrice: 1850, materials: [{ id: 224001, name: "Polvo abisal", qty: 8 }, { id: 224005, name: "Esencia cósmica mayor", qty: 4 }, { id: 224010, name: "Cristal de vacío", qty: 1 }] },
        "enchant_ring": { prof: "enchanting", name: "Encantamiento de Anillo: Velocidad Radiante", salePrice: 950, materials: [{ id: 224001, name: "Polvo abisal", qty: 5 }, { id: 224005, name: "Esencia cósmica mayor", qty: 2 }] },
        "enchant_cloak": { prof: "enchanting", name: "Encantamiento de Capa: Gracia Alada", salePrice: 720, materials: [{ id: 224001, name: "Polvo abisal", qty: 4 }, { id: 224010, name: "Cristal de vacío", qty: 1 }] },
        "enchant_chest": { prof: "enchanting", name: "Encantamiento de Pecho: Estadísticas Gloriosas", salePrice: 2400, materials: [{ id: 224001, name: "Polvo abisal", qty: 12 }, { id: 224010, name: "Cristal de vacío", qty: 2 }] },

        "armor_kit": { prof: "leatherworking", name: "Kit de Armadura Reforzado", salePrice: 340, materials: [{ id: 218001, name: "Cuero basto", qty: 8 }, { id: 218005, name: "Escama endurecida", qty: 3 }] },
        "boots_leather": { prof: "leatherworking", name: "Botas de Merodeador Sombrío", salePrice: 1600, materials: [{ id: 218001, name: "Cuero basto", qty: 12 }, { id: 218005, name: "Escama endurecida", qty: 4 }] },
        "legs_scaled": { prof: "leatherworking", name: "Pantalones de Escama Feroz", salePrice: 2900, materials: [{ id: 218001, name: "Cuero basto", qty: 16 }, { id: 218005, name: "Escama endurecida", qty: 6 }] },

        "cloth_bolt": { prof: "tailoring", name: "Rollo de Tela Crepuscular", salePrice: 180, materials: [{ id: 219001, name: "Fibra crepuscular", qty: 10 }] },
        "robe_spellfire": { prof: "tailoring", name: "Vestimentas de Tejefuego", salePrice: 2400, materials: [{ id: 219001, name: "Fibra crepuscular", qty: 16 }, { id: 219005, name: "Seda tejida de éter", qty: 4 }] },
        "mantle_weave": { prof: "tailoring", name: "Manto de Hilado Arcano", salePrice: 1850, materials: [{ id: 219001, name: "Fibra crepuscular", qty: 12 }, { id: 219005, name: "Seda tejida de éter", qty: 3 }] },

        "tinker_item": { prof: "engineering", name: "Micro-ajustador Térmico", salePrice: 750, materials: [{ id: 220001, name: "Tornillo de cobalto", qty: 6 }, { id: 220005, name: "Muelle de precisión", qty: 2 }] },
        "goggles_eng": { prof: "engineering", name: "Gafas de Espectro Óptico", salePrice: 2100, materials: [{ id: 220001, name: "Tornillo de cobalto", qty: 10 }, { id: 220005, name: "Muelle de precisión", qty: 4 }, { id: 211200, name: "Barra de titanio", qty: 2 }] },
        "bomb_thermal": { prof: "engineering", name: "Carga Térmica Volátil", salePrice: 420, materials: [{ id: 220001, name: "Tornillo de cobalto", qty: 5 }, { id: 220005, name: "Muelle de precisión", qty: 1 }] }
    };

    let cachedPrices = null;
    let currentRealmRegion = null;
    let currentFilter = "all";

    // Cargar favoritos desde localStorage
    function getFavorites() {
        try {
            return JSON.parse(localStorage.getItem('wow_favs')) || [];
        } catch (e) {
            return [];
        }
    }

    function toggleFavorite(key) {
        let favs = getFavorites();
        if (favs.includes(key)) {
            favs = favs.filter(item => item !== key);
        } else {
            favs.push(key);
        }
        localStorage.setItem('wow_favs', JSON.stringify(favs));
        populateRecipes(currentFilter, document.getElementById('recipe-search').value);
    }

    function getLang() {
        const langSel = document.getElementById('lang-selector');
        return langSel ? langSel.value : 'es';
    }

    function updateUIStrings() {
        const lang = getLang();
        const t = translations[lang] || translations.es;

        const setTxt = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
        const setPlh = (id, val) => { const el = document.getElementById(id); if(el) el.placeholder = val; };

        setTxt('app-title', t.title);
        setTxt('calculate-btn', t.btn);
        setTxt('opt-default-realm', t.selectRealm);
        setTxt('opt-default-recipe', t.optDefaultRecipe);
        setTxt('lbl-realm', t.lblRealm);
        setTxt('lbl-craft-qty', t.lblCraftQty);
        setTxt('lbl-search', t.lblSearch);
        setTxt('lbl-recipe-select', t.lblRecipeSelect);
        setPlh('recipe-search', t.searchPlaceholder);

        setTxt('btn-prof-all', t.profAll);
        setTxt('btn-prof-fav', t.profFav);
        setTxt('btn-prof-alchemy', t.profAlchemy);
        setTxt('btn-prof-jc', t.profJC);
        setTxt('btn-prof-bs', t.profBS);
        setTxt('btn-prof-enc', t.profEnc);
        setTxt('btn-prof-lw', t.profLW);
        setTxt('btn-prof-tail', t.profTail);
        setTxt('btn-prof-eng', t.profEng);

        const resultsContainer = document.getElementById('results-container');
        if (resultsContainer && !resultsContainer.querySelector('.recipe-card')) {
            setTxt('default-text', t.defaultText);
        }
    }

    function populateRecipes(filterProf = "all", searchTerm = "") {
        const lang = getLang();
        const t = translations[lang] || translations.es;
        const selector = document.getElementById('recipe-selector');
        if (!selector) return;
        
        selector.innerHTML = `<option value="">${t.optDefaultRecipe}</option>`;
        const favs = getFavorites();

        for (const [key, recipe] of Object.entries(recipesDatabase)) {
            if (filterProf === "favorites" && !favs.includes(key)) continue;
            if (filterProf !== "all" && filterProf !== "favorites" && recipe.prof !== filterProf) continue;
            if (searchTerm && !recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) continue;

            const isFav = favs.includes(key);
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${isFav ? '⭐ ' : ''}[${recipe.prof.toUpperCase()}] ${recipe.name}`;
            selector.appendChild(option);
        }
    }

    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            updateUIStrings();
            const searchInput = document.getElementById('recipe-search');
            populateRecipes(currentFilter, searchInput ? searchInput.value : '');
        });
    }

    document.querySelectorAll('.prof-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.prof-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-prof');
            const searchInput = document.getElementById('recipe-search');
            populateRecipes(currentFilter, searchInput ? searchInput.value : '');
        });
    });

    const searchInput = document.getElementById('recipe-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            populateRecipes(currentFilter, e.target.value);
        });
    }

    populateRecipes();
    updateUIStrings();

    const calcBtn = document.getElementById('calculate-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', async () => {
            const lang = getLang();
            const t = translations[lang] || translations.es;
            const realmSel = document.getElementById('realm-selector');
            const recipeSel = document.getElementById('recipe-selector');
            const resultsContainer = document.getElementById('results-container');

            const realm = realmSel ? realmSel.value : '';
            const recipeKey = recipeSel ? recipeSel.value : '';

            if (!realm) {
                alert(t.selectRealmAlert);
                return;
            }
            if (!recipeKey) {
                alert(t.selectRecipeAlert);
                return;
            }

            if (resultsContainer) {
                resultsContainer.innerHTML = `<p style="text-align: center; color: var(--accent); margin-top: 40px;">${t.syncing}</p>`;
            }

            try {
                if (!cachedPrices || currentRealmRegion !== realm) {
                    const response = await fetch(`/api/prices?realm=${realm}`);
                    const data = await response.json();

                    if (data.error) {
                        if (resultsContainer) {
                            resultsContainer.innerHTML = `<p style="color: var(--red);">${t.errorTitle} ${data.error}</p>`;
                        }
                        return;
                    }

                    cachedPrices = data.prices;
                    currentRealmRegion = realm;
                }

                const recipe = recipesDatabase[recipeKey];
                renderCalculator(recipe, recipeKey, realm, cachedPrices, t);

            } catch (err) {
                if (resultsContainer) {
                    resultsContainer.innerHTML = `<p style="color: var(--red); text-align: center;">${t.connectionError}</p>`;
                }
            }
        });
    }

    function renderCalculator(recipe, recipeKey, realm, prices, t, customSalePrice = null) {
        const resultsContainer = document.getElementById('results-container');
        if (!resultsContainer) return;

        const craftMultiplierSel = document.getElementById('craft-qty-multiplier');
        const multiplier = craftMultiplierSel ? parseInt(craftMultiplierSel.value) || 1 : 1;

        const salePrice = (customSalePrice !== null ? customSalePrice : recipe.salePrice) * multiplier;
        let totalCraftCost = 0;
        let materialsHtml = '';

        const favs = getFavorites();
        const isFav = favs.includes(recipeKey);

        recipe.materials.forEach((mat, index) => {
            const unitPrice = prices[mat.id] || 15.00;
            const requiredQty = mat.qty * multiplier;
            
            const existingInput = document.getElementById(`owned-${index}`);
            const ownedQty = existingInput ? Math.max(0, parseInt(existingInput.value) || 0) : 0;
            
            const effectiveQty = Math.max(0, requiredQty - ownedQty);
            const subtotal = unitPrice * effectiveQty;
            totalCraftCost += subtotal;

            materialsHtml += `
                <tr>
                    <td>${mat.name} <span style="font-size: 0.75em; color: var(--text-muted);">(ID: ${mat.id})</span></td>
                    <td style="text-align: center;">${requiredQty}</td>
                    <td style="text-align: center;">
                        <input type="number" min="0" value="${ownedQty}" class="input-owned" id="owned-${index}" data-index="${index}">
                    </td>
                    <td style="text-align: right;">${unitPrice.toFixed(2)}g</td>
                    <td style="text-align: right; color: var(--accent);" id="subtotal-${index}">${subtotal.toFixed(2)}g</td>
                </tr>
            `;
        });

        const ahTax = salePrice * 0.05;
        const netRevenue = salePrice - ahTax;
        const netProfit = netRevenue - totalCraftCost;
        const profitColor = netProfit >= 0 ? 'var(--green)' : 'var(--red)';

        resultsContainer.innerHTML = `
            <div class="recipe-card">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 15px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <button class="fav-btn ${isFav ? 'active' : ''}" id="toggle-fav-btn" title="Guardar en Favoritas">⭐</button>
                        <h2 style="margin: 0; color: #fff; font-size: 1.3rem;">${recipe.name} <span style="font-size: 0.8em; color: var(--accent);">(x${multiplier})</span></h2>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <label style="font-size: 0.9em; color: var(--text-muted);">${t.salePriceLabel}</label>
                        <input type="number" id="custom-sale-price" class="input-price" value="${salePrice}">
                    </div>
                </div>
                <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 15px;">Servidor / Realm: <strong>${realm.toUpperCase()}</strong> | AH Tax (5%): <strong id="ah-tax-display">${ahTax.toFixed(2)}g</strong></p>

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
                    <tbody>
                        ${materialsHtml}
                    </tbody>
                </table>

                <div class="summary-grid">
                    <div class="summary-box">
                        <span>${t.costMaterials}</span>
                        <strong style="color: var(--red);" id="total-cost-display">${totalCraftCost.toFixed(2)}g</strong>
                    </div>
                    <div class="summary-box">
                        <span>${t.netSale}</span>
                        <strong style="color: #fff;" id="net-sale-display">${netRevenue.toFixed(2)}g</strong>
                    </div>
                    <div class="summary-box">
                        <span>${t.netProfit}</span>
                        <strong style="color: ${profitColor};" id="net-profit-display">${netProfit.toFixed(2)}g</strong>
                    </div>
                </div>
            </div>
        `;

        // Evento botón favorito
        document.getElementById('toggle-fav-btn').addEventListener('click', () => {
            toggleFavorite(recipeKey);
            // Re-renderizar para actualizar el icono de estrella
            renderCalculator(recipe, recipeKey, realm, prices, t, customSalePrice);
        });

        // Eventos dinámicos de inputs
        document.querySelectorAll('.input-owned').forEach(input => {
            input.addEventListener('input', () => {
                recalculateLive(recipe, recipeKey, prices);
            });
        });

        const customPriceInput = document.getElementById('custom-sale-price');
        if (customPriceInput) {
            customPriceInput.addEventListener('input', () => {
                recalculateLive(recipe, recipeKey, prices);
            });
        }
    }

    const craftMultiplierSel = document.getElementById('craft-qty-multiplier');
    if (craftMultiplierSel) {
        craftMultiplierSel.addEventListener('change', () => {
            const recipeSel = document.getElementById('recipe-selector');
            const recipeKey = recipeSel ? recipeSel.value : '';
            if (recipeKey && cachedPrices) {
                const recipe = recipesDatabase[recipeKey];
                const realm = document.getElementById('realm-selector').value;
                const lang = getLang();
                const t = translations[lang] || translations.es;
                renderCalculator(recipe, recipeKey, realm, cachedPrices, t);
            }
        });
    }

    function recalculateLive(recipe, recipeKey, prices) {
        const craftMultiplierSel = document.getElementById('craft-qty-multiplier');
        const multiplier = craftMultiplierSel ? parseInt(craftMultiplierSel.value) || 1 : 1;
        let totalCraftCost = 0;

        recipe.materials.forEach((mat, index) => {
            const unitPrice = prices[mat.id] || 15.00;
            const requiredQty = mat.qty * multiplier;
            const input = document.getElementById(`owned-${index}`);
            const ownedQty = input ? Math.max(0, parseInt(input.value) || 0) : 0;
            const effectiveQty = Math.max(0, requiredQty - ownedQty);
            const subtotal = unitPrice * effectiveQty;
            totalCraftCost += subtotal;

            const subtotalEl = document.getElementById(`subtotal-${index}`);
            if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)}g`;
        });

        const customPriceInput = document.getElementById('custom-sale-price');
        const currentSalePrice = customPriceInput ? parseFloat(customPriceInput.value) || 0 : (recipe.salePrice * multiplier);

        const ahTax = currentSalePrice * 0.05;
        const netRevenue = currentSalePrice - ahTax;
        const netProfit = netRevenue - totalCraftCost;
        const profitColor = netProfit >= 0 ? 'var(--green)' : 'var(--red)';

        const ahTaxEl = document.getElementById('ah-tax-display');
        if (ahTaxEl) ahTaxEl.textContent = `${ahTax.toFixed(2)}g`;

        const totalCostEl = document.getElementById('total-cost-display');
        if (totalCostEl) totalCostEl.textContent = `${totalCraftCost.toFixed(2)}g`;

        const netSaleEl = document.getElementById('net-sale-display');
        if (netSaleEl) netSaleEl.textContent = `${netRevenue.toFixed(2)}g`;

        const netProfitEl = document.getElementById('net-profit-display');
        if (netProfitEl) {
            netProfitEl.textContent = `${netProfit.toFixed(2)}g`;
            netProfitEl.style.color = profitColor;
        }
    }
});
