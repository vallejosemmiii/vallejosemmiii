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
            tableSource: "Origen / Drop / Zona",
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
            connectionError: "No se pudo conectar con le servidor backend."
        },
        en: {
            title: "WoW Crafting & Economy Hub",
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
            tableSource: "Source / Drop / Zone",
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
            title: "WoW Crafting & Economy Hub",
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
            tableSource: "Quelle / Drop / Zone",
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
            title: "WoW Crafting & Economy Hub",
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
            tableSource: "Source / Drop / Zone",
            tableQty: "Requis",
            tableOwned: "En stock",
            tablePrice: "Prix Unitaire (HDV)",
            tableSubtotal: "Sous-total",
            costMaterials: "Coût des Matériaux",
            netSale: "Vente Neta (-5%)",
            netProfit: "Bénéfice Net",
            salePriceLabel: "Prix de Vente (HDV):",
            syncing: "Synchronisation des prix en temps réel avec l'Hôtel des Ventes Blizzard...",
            selectRealmAlert: "Veuillez d'abord sélectionner un royaume.",
            selectRecipeAlert: "Veuillez sélectionner une recette dans le catalogue.",
            errorTitle: "Erreur :",
            connectionError: "Impossible de se connecter au serveur backend."
        },
        pt: {
            title: "WoW Crafting & Economy Hub",
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
            tableSource: "Origem / Drop / Zona",
            tableQty: "Necessário",
            tableOwned: "Possui",
            tablePrice: "Preço Unit. (AH)",
            tableSubtotal: "Subtotal",
            costMaterials: "Custo de Materiais",
            netSale: "Venda Líquida (-5%)",
            netProfit: "Lucro Líquido",
            salePriceLabel: "Preço de Venta (AH):",
            syncing: "Sincronizando preços em tempo real com a Casa de Leilões da Blizzard...",
            selectRealmAlert: "Por favor, selecione um reino primeiro.",
            selectRecipeAlert: "Por favor, selecione uma receita do catálogo.",
            errorTitle: "Erro:",
            connectionError: "Não foi possível conectar ao servidor backend."
        }
    };

    // Catálogo con nombres de ítems y fuentes de obtención (Herboristería, Minería, Mobs / Zonas)
    const recipesDatabase = {
        "flask_alacrity": {
            prof: "alchemy",
            salePrice: 450,
            names: { es: "Frasco de Pungente Alacridad", en: "Flask of Pungent Alacrity", de: "Fläschchen der beißenden Alacrity", fr: "Flacon d'alacrité piquante", pt: "Frasco de Alacridade Pungente" },
            materials: [
                { 
                    id: 210815, 
                    names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, 
                    source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde: Insel Dorn", fr: "🌱 Herboristerie : Île de Dorn", pt: "🌱 Herborismo: Ilha de Dorn" },
                    qty: 5 
                },
                { 
                    id: 210802, 
                    names: { es: "Lirio pacífico", en: "Peacebloom", de: "Friedblume", fr: "Pacifique", pt: "Lírio-da-paz" }, 
                    source: { es: "🌱 Herboristería: Zonas Clásicas / TWW", en: "🌱 Herbalism: Classic / TWW Zones", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" },
                    qty: 3 
                },
                { 
                    id: 210798, 
                    names: { es: "Hoja de Ensueño", en: "Dreamleaf", de: "Traumblatt", fr: "Feuille de rêve", pt: "Folha-onírica" }, 
                    source: { es: "🌱 Herboristería: Val'sharah / TWW", en: "🌱 Herbalism: Val'sharah / TWW", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" },
                    qty: 2 
                }
            ]
        },
        "flask_tempered": {
            prof: "alchemy",
            salePrice: 520,
            names: { es: "Frasco de Furia Templada", en: "Flask of Tempered Fury", de: "Fläschchen der geeichten Wut", fr: "Flacon de fureur tempérée", pt: "Frasco de Fúria Temperada" },
            materials: [
                { 
                    id: 210815, 
                    names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, 
                    source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" },
                    qty: 6 
                },
                { 
                    id: 211503, 
                    names: { es: "Frasco coalescente", en: "Coalesced Vial", de: "Koaleszierte Ampulle", fr: "Fiole coïncidente", pt: "Frasco Coalescente" }, 
                    source: { es: "🧪 Proveedor de Alquimia (Ciudad Dornogal)", en: "🧪 Alchemy Vendor (Dornogal)", de: "🧪 Alchemiehändler", fr: "🧪 Vendeur d'alchimie", pt: "🧪 Vendedor de Alquimia" },
                    qty: 2 
                }
            ]
        },
        "potion_cauldron": {
            prof: "alchemy",
            salePrice: 3200,
            names: { es: "Caldero de Alquimia de Batalla", en: "Battle Alchemist's Cauldron", de: "Kessel des Alchemisten", fr: "Chaudron d'alchimiste de bataille", pt: "Caldeirão do Alquimista de Batalha" },
            materials: [
                { 
                    id: 210815, 
                    names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, 
                    source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" },
                    qty: 20 
                },
                { 
                    id: 210802, 
                    names: { es: "Lirio pacífico", en: "Peacebloom", de: "Friedblume", fr: "Pacifique", pt: "Lírio-da-paz" }, 
                    source: { es: "🌱 Herboristería general", en: "🌱 General Herbalism", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" },
                    qty: 15 
                },
                { 
                    id: 211503, 
                    names: { es: "Frasco coalescente", en: "Coalesced Vial", de: "Koaleszierte Ampulle", fr: "Fiole coïncidente", pt: "Frasco Coalescente" }, 
                    source: { es: "🧪 Proveedor de Alquimia (Dornogal)", en: "🧪 Alchemy Vendor (Dornogal)", de: "🧪 Alchemiehändler", fr: "🧪 Vendeur d'alchimie", pt: "🧪 Vendedor de Alquimia" },
                    qty: 5 
                }
            ]
        },
        "gem_culminating": {
            prof: "jewelcrafting",
            salePrice: 600,
            names: { es: "Rubí Culpable Deslumbrante", en: "Culminating Blasphemite", de: "Gipfelnde Lästerung", fr: "Blasphémique culminante", pt: "Blasfêmia Culminante" },
            materials: [
                { 
                    id: 213744, 
                    names: { es: "Artesa (Bismuto)", en: "Bismuth", de: "Bismut", fr: "Bismuth", pt: "Bismuto" }, 
                    source: { es: "⛏️ Minería: Depósitos en The Ringing Deeps", en: "⛏️ Mining: The Ringing Deeps Veins", de: "⛏️ Bergbau: Die Hallenden Tiefen", fr: "⛏️ Minage : Les Abîmes retentissants", pt: "⛏️ Mineração: Profundezas Ressonantes" },
                    qty: 10 
                },
                { 
                    id: 213750, 
                    names: { es: "Barra de veraplata", en: "Truesilver Bar", de: "Echtsilberbarren", fr: "Barre de vrai-argent", pt: "Barra de Veraprata" }, 
                    source: { es: "🔨 Fundición: Minería clásica", en: "🔨 Smelting: Classic Mining", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" },
                    qty: 2 
                },
                { 
                    id: 213755, 
                    names: { es: "Diamante de asedio", en: "Onyx", de: "Onyx", fr: "Onyx", pt: "Ônix" }, 
                    source: { es: "👾 Drop: Elementales de tierra (Azj-Kahet)", en: "👾 Drop: Earth Elementals (Azj-Kahet)", de: "👾 Drop: Erdelementare", fr: "👾 Butin : Élémentaires de terre", pt: "👾 Drop: Elementais da Terra" },
                    qty: 1 
                }
            ]
        },
        "alloy_Bismuth": {
            prof: "blacksmithing",
            salePrice: 120,
            names: { es: "Lingote de Bismuto Enriquecido", en: "Bismuth Alloy", de: "Bismutlegierung", fr: "Alliage de bismuth", pt: "Liga de Bismuto" },
            materials: [
                { 
                    id: 211100, 
                    names: { es: "Mineral de Bismuto", en: "Bismuth Ore", de: "Bismuterz", fr: "Minerais de bismuth", pt: "Minério de Bismuto" }, 
                    source: { es: "⛏️ Minería: Venas en Khaz Algar", en: "⛏️ Mining: Khaz Algar Veins", de: "⛏️ Bergbau: Khaz Algar", fr: "⛏️ Minage : Khaz Algar", pt: "⛏️ Mineração: Khaz Algar" },
                    qty: 10 
                },
                { 
                    id: 211105, 
                    names: { es: "Mena fundida", en: "Molten Slag", de: "Geschmolzene Schlacke", fr: "Scorie en fusion", pt: "Escória Fundida" }, 
                    source: { es: "👾 Drop: Minions mecánicos (Isla Dorn)", en: "👾 Drop: Mechanical Minions (Isle of Dorn)", de: "👾 Drop: Mechanische Diener", fr: "👾 Butin : Sbires mécaniques", pt: "👾 Drop: Lacaios Mecânicos" },
                    qty: 2 
                }
            ]
        },
        "enchant_weapon": {
            prof: "enchanting",
            salePrice: 1850,
            names: { es: "Encantamiento de Arma: Divisa Flamígera", en: "Enchant Weapon - Authority", de: "Waffenverzauberung - Autorität", fr: "Ench. d'arme - Autorité", pt: "Encantar Arma - Autoridade" },
            materials: [
                { 
                    id: 224001, 
                    names: { es: "Polvo abisal", en: "Storm Dust", de: "Staub", fr: "Poussière", pt: "Pó" }, 
                    source: { es: "✨ Desencantar equipo verde de TWW", en: "✨ Disenchanting TWW Green Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" },
                    qty: 8 
                },
                { 
                    id: 224005, 
                    names: { es: "Esencia cósmica mayor", en: "Shimmering Crystal", de: "Schimmernder Kristall", fr: "Cristal scintillant", pt: "Cristal Cintilante" }, 
                    source: { es: "✨ Desencantar equipo azul de TWW", en: "✨ Disenchanting TWW Blue Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" },
                    qty: 4 
                }
            ]
        }
    };

    let cachedPrices = null;
    let currentRealmRegion = null;
    let currentFilter = "all";

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
            
            const recipeName = recipe.names[lang] || recipe.names['es'];
            if (searchTerm && !recipeName.toLowerCase().includes(searchTerm.toLowerCase())) continue;

            const isFav = favs.includes(key);
            const option = document.createElement('option');
            option.value = key;
            option.textContent = `${isFav ? '⭐ ' : ''}[${recipe.prof.toUpperCase()}] ${recipeName}`;
            selector.appendChild(option);
        }
    }

    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            updateUIStrings();
            const searchInput = document.getElementById('recipe-search');
            populateRecipes(currentFilter, searchInput ? searchInput.value : '');
            
            const recipeSel = document.getElementById('recipe-selector');
            if (recipeSel && recipeSel.value && cachedPrices) {
                const recipe = recipesDatabase[recipeSel.value];
                const realm = document.getElementById('realm-selector').value;
                const t = translations[getLang()] || translations.es;
                renderCalculator(recipe, recipeSel.value, realm, cachedPrices, t);
            }
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
                resultsContainer.innerHTML = `<p style="text-align: center; color: var(--accent-gold); margin-top: 50px; font-size: 1.05rem;">${t.syncing}</p>`;
            }

            try {
                if (!cachedPrices || currentRealmRegion !== realm) {
                    const response = await fetch(`/api/prices?realm=${realm}`);
                    const data = await response.json();

                    if (data.error) {
                        if (resultsContainer) {
                            resultsContainer.innerHTML = `<p style="color: var(--red); text-align: center;">${t.errorTitle} ${data.error}</p>`;
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

        const lang = getLang();
        const recipeName = recipe.names[lang] || recipe.names['es'];

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
            const matName = mat.names[lang] || mat.names['es'];
            const sourceText = mat.source[lang] || mat.source['es'];
            
            const existingInput = document.getElementById(`owned-${index}`);
            const ownedQty = existingInput ? Math.max(0, parseInt(existingInput.value) || 0) : 0;
            
            const effectiveQty = Math.max(0, requiredQty - ownedQty);
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
        const profitColor = netProfit >= 0 ? 'var(--green)' : 'var(--red)';

        resultsContainer.innerHTML = `
            <div class="recipe-card">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <button class="fav-btn ${isFav ? 'active' : ''}" id="toggle-fav-btn" title="Favorita">⭐</button>
                        <h2 style="margin: 0; color: #fff; font-size: 1.4rem; font-weight: 700;">${recipeName} <span style="font-size: 0.85em; color: var(--accent-gold);">(x${multiplier})</span></h2>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <label style="font-size: 0.85em; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">${t.salePriceLabel}</label>
                        <input type="number" id="custom-sale-price" class="input-price" value="${salePrice}">
                    </div>
                </div>
                <p style="font-size: 0.85em; color: var(--text-muted); margin-bottom: 20px;">Realm: <strong>${realm.toUpperCase()}</strong> | AH Tax (5%): <strong id="ah-tax-display">${ahTax.toFixed(2)}g</strong></p>

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

        document.getElementById('toggle-fav-btn').addEventListener('click', () => {
            toggleFavorite(recipeKey);
            renderCalculator(recipe, recipeKey, realm, prices, t, customSalePrice);
        });

        document.querySelectorAll('.input-owned').forEach(input => {
            input.addEventListener('input', () => {
                recalculateLive(recipe, prices);
            });
        });

        const customPriceInput = document.getElementById('custom-sale-price');
        if (customPriceInput) {
            customPriceInput.addEventListener('input', () => {
                recalculateLive(recipe, prices);
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

    function recalculateLive(recipe, prices) {
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
