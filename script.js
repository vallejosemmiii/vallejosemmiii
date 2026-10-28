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
            title: "WoW Crafting & Economy Hub",
            btn: "Calculate Live Profits",
            selectRealm: "Select your realm...",
            defaultText: "Select a realm and recipe to query the Auction House...",
            lblRealm: "Game Realm:",
            lblCraftQty: "Craft Quantity:",
            lblSearch: "Search Recipe or Item:",
            lblRecipeSelect: "Select Specific Recipe:",
            optDefaultRecipe: "Select a recipe from the catalog...",
            searchPlaceholder: "Ex. Flask, Gem, Bismuth...",
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
            title: "WoW Crafting & Economy Hub",
            btn: "Live-Gewinn berechnen",
            selectRealm: "Wähle deinen Server...",
            defaultText: "Wähle einen Server und ein Rezept, um das Auktionshaus abzufragen...",
            lblRealm: "Spielserver:",
            lblCraftQty: "Herstellungsmenge:",
            lblSearch: "Rezept oder Gegenstand suchen:",
            lblRecipeSelect: "Spezifisches Rezept auswählen:",
            optDefaultRecipe: "Wähle ein Rezept aus dem Katalog...",
            searchPlaceholder: "Bsp. Fläschchen, Edelstein...",
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
            title: "WoW Crafting & Economy Hub",
            btn: "Calculer les Bénéfices en Direct",
            selectRealm: "Sélectionnez votre royaume...",
            defaultText: "Sélectionnez un royaume et une recette pour interroger l'Hôtel des Ventes...",
            lblRealm: "Royaume de jeu:",
            lblCraftQty: "Quantité à fabriquer:",
            lblSearch: "Rechercher une recette ou un objet:",
            lblRecipeSelect: "Sélectionner une recette spécifique:",
            optDefaultRecipe: "Sélectionnez une recette dans le catalogue...",
            searchPlaceholder: "Ex. Flacon, Gemme...",
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
            searchPlaceholder: "Ex. Frasco, Gema, Bismuto...",
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

    // Catálogo Verdaderamente Masivo de The War Within con drops, zonas y proveedores
    const recipesDatabase = {
        // --- ALQUIMIA ---
        "flask_alacrity": {
            prof: "alchemy", salePrice: 450,
            names: { es: "Frasco de Pungente Alacridad", en: "Flask of Pungent Alacrity", de: "Fläschchen der beißenden Alacrity", fr: "Flacon d'alacrité piquante", pt: "Frasco de Alacridade Pungente" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde: Insel Dorn", fr: "🌱 Herboristerie : Île de Dorn", pt: "🌱 Herborismo: Ilha de Dorn" }, qty: 5 },
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom", de: "Friedblume", fr: "Pacifique", pt: "Lírio-da-paz" }, source: { es: "🌱 Herboristería general", en: "🌱 General Herbalism", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 3 },
                { id: 210798, names: { es: "Hoja de Ensueño", en: "Dreamleaf", de: "Traumblatt", fr: "Feuille de rêve", pt: "Folha-onírica" }, source: { es: "🌱 Herboristería: Val'sharah", en: "🌱 Herbalism: Val'sharah", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 2 }
            ]
        },
        "flask_tempered": {
            prof: "alchemy", salePrice: 520,
            names: { es: "Frasco de Furia Templada", en: "Flask of Tempered Fury", de: "Fläschchen der geeichten Wut", fr: "Flacon de fureur tempérée", pt: "Frasco de Fúria Temperada" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 6 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial", de: "Koaleszierte Ampulle", fr: "Fiole coïncidente", pt: "Frasco Coalescente" }, source: { es: "🧪 Proveedor de Alquimia (Dornogal)", en: "🧪 Alchemy Vendor (Dornogal)", de: "🧪 Alchemiehändler", fr: "🧪 Vendeur d'alchimie", pt: "🧪 Vendedor de Alquimia" }, qty: 2 }
            ]
        },
        "potion_cauldron": {
            prof: "alchemy", salePrice: 3200,
            names: { es: "Caldero de Alquimia de Batalla", en: "Battle Alchemist's Cauldron", de: "Kessel des Alchemisten", fr: "Chaudron d'alchimiste de bataille", pt: "Caldeirão do Alquimista de Batalha" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 20 },
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom", de: "Friedblume", fr: "Pacifique", pt: "Lírio-da-paz" }, source: { es: "🌱 Herboristería general", en: "🌱 General Herbalism", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 15 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial", de: "Koaleszierte Ampulle", fr: "Fiole coïncidente", pt: "Frasco Coalescente" }, source: { es: "🧪 Proveedor de Alquimia (Dornogal)", en: "🧪 Alchemy Vendor (Dornogal)", de: "🧪 Alchemiehändler", fr: "🧪 Vendeur d'alchimie", pt: "🧪 Vendedor de Alquimia" }, qty: 5 }
            ]
        },
        "potion_tauri": {
            prof: "alchemy", salePrice: 210,
            names: { es: "Poción de Velocidad Ciclópea", en: "Cyclopean Speed Potion", de: "Trank der zyklopischen Geschwindigkeit", fr: "Potion de vitesse cyclopéenne", pt: "Poção de Velocidade Ciclópica" },
            materials: [
                { id: 210802, names: { es: "Lirio pacífico", en: "Peacebloom", de: "Friedblume", fr: "Pacifique", pt: "Lírio-da-paz" }, source: { es: "🌱 Herboristería general", en: "🌱 General Herbalism", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 4 },
                { id: 210798, names: { es: "Hoja de Ensueño", en: "Dreamleaf", de: "Traumblatt", fr: "Feuille de rêve", pt: "Folha-onírica" }, source: { es: "🌱 Herboristería: Val'sharah", en: "🌱 Herbalism: Val'sharah", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 2 }
            ]
        },
        "potion_ultimate": {
            prof: "alchemy", salePrice: 650,
            names: { es: "Poción de Poder Definitivo", en: "Ultimate Power Potion", de: "Trank der ultimativen Macht", fr: "Potion de puissance ultime", pt: "Poção de Poder Supremo" },
            materials: [
                { id: 210815, names: { es: "Flor de la peste", en: "Blighted Herb", de: "Pestblume", fr: "Fleur pestiférée", pt: "Erva Podre" }, source: { es: "🌱 Herboristería: Isla Dorn / Hallowfall", en: "🌱 Herbalism: Isle of Dorn / Hallowfall", de: "🌱 Kräuterkunde", fr: "🌱 Herboristerie", pt: "🌱 Herborismo" }, qty: 8 },
                { id: 211503, names: { es: "Frasco coalescente", en: "Coalesced Vial", de: "Koaleszierte Ampulle", fr: "Fiole coïncidente", pt: "Frasco Coalescente" }, source: { es: "🧪 Proveedor de Alquimia (Dornogal)", en: "🧪 Alchemy Vendor (Dornogal)", de: "🧪 Alchemiehändler", fr: "🧪 Vendeur d'alchimie", pt: "🧪 Vendedor de Alquimia" }, qty: 3 }
            ]
        },

        // --- JOYERÍA ---
        "gem_culminating": {
            prof: "jewelcrafting", salePrice: 600,
            names: { es: "Rubí Culpable Deslumbrante", en: "Culminating Blasphemite", de: "Gipfelnde Lästerung", fr: "Blasphémique culminante", pt: "Blasfêmia Culminante" },
            materials: [
                { id: 213744, names: { es: "Artesa (Bismuto)", en: "Bismuth", de: "Bismut", fr: "Bismuth", pt: "Bismuto" }, source: { es: "⛏️ Minería: The Ringing Deeps", en: "⛏️ Mining: The Ringing Deeps", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 10 },
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar", de: "Echtsilberbarren", fr: "Barre de vrai-argent", pt: "Barra de Veraprata" }, source: { es: "🔨 Fundición: Minería clásica", en: "🔨 Smelting: Classic Mining", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 2 },
                { id: 213755, names: { es: "Diamante de asedio", en: "Onyx", de: "Onyx", fr: "Onyx", pt: "Ônix" }, source: { es: "👾 Drop: Elementales (Azj-Kahet)", en: "👾 Drop: Elementals (Azj-Kahet)", de: "👾 Drop: Elementare", fr: "👾 Butin : Élémentaires", pt: "👾 Drop: Elementais" }, qty: 1 }
            ]
        },
        "neck_azure": {
            prof: "jewelcrafting", salePrice: 1500,
            names: { es: "Collar de Veraplata Encantado", en: "Gilded Truesilver Necklace", de: "Vergoldete Echtsilberhalskette", fr: "Collier en vrai-argent doré", pt: "Colar de Veraprata Dourado" },
            materials: [
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar", de: "Echtsilberbarren", fr: "Barre de vrai-argent", pt: "Barra de Veraprata" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 6 },
                { id: 213760, names: { es: "Esmeralda viviente", en: "Culminating Gem", de: "Gipfelnder Edelstein", fr: "Gemme culminante", pt: "Gema Culminante" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 2 }
            ]
        },
        "gem_quick": {
            prof: "jewelcrafting", salePrice: 480,
            names: { es: "Ónix Sibilante Rápido", en: "Quick Sibilant Onyx", de: "Schneller zischender Onyx", fr: "Onyx sibilant rapide", pt: "Ônix Sibilante Rápido" },
            materials: [
                { id: 213744, names: { es: "Artesa (Bismuto)", en: "Bismuth", de: "Bismut", fr: "Bismuth", pt: "Bismuto" }, source: { es: "⛏️ Minería: The Ringing Deeps", en: "⛏️ Mining: The Ringing Deeps", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 8 },
                { id: 213760, names: { es: "Esmeralda viviente", en: "Culminating Gem", de: "Gipfelnder Edelstein", fr: "Gemme culminante", pt: "Gema Culminante" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 1 }
            ]
        },
        "ring_master": {
            prof: "jewelcrafting", salePrice: 2200,
            names: { es: "Sello de Maestría Estelar", en: "Stellar Mastery Signet", de: "Siegel der Meisterschaft", fr: "Chevalière de maîtrise stellaire", pt: "Sinete de Maestria Estelar" },
            materials: [
                { id: 213750, names: { es: "Barra de veraplata", en: "Truesilver Bar", de: "Echtsilberbarren", fr: "Barre de vrai-argent", pt: "Barra de Veraprata" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 8 },
                { id: 213755, names: { es: "Diamante de asedio", en: "Onyx", de: "Onyx", fr: "Onyx", pt: "Ônix" }, source: { es: "👾 Drop: Elementales (Azj-Kahet)", en: "👾 Drop: Elementals (Azj-Kahet)", de: "👾 Drop: Elementare", fr: "👾 Butin : Élémentaires", pt: "👾 Drop: Elementais" }, qty: 2 }
            ]
        },

        // --- HERRERÍA ---
        "alloy_Bismuth": {
            prof: "blacksmithing", salePrice: 120,
            names: { es: "Lingote de Bismuto Enriquecido", en: "Bismuth Alloy", de: "Bismutlegierung", fr: "Alliage de bismuth", pt: "Liga de Bismuto" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore", de: "Bismuterz", fr: "Minerais de bismuth", pt: "Minério de Bismuto" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 10 },
                { id: 211105, names: { es: "Mena fundida", en: "Molten Slag", de: "Geschmolzene Schlacke", fr: "Scorie en fusion", pt: "Escória Fundida" }, source: { es: "👾 Drop: Mobs mecánicos", en: "👾 Drop: Mechanical Mobs", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 2 }
            ]
        },
        "sword_epic": {
            prof: "blacksmithing", salePrice: 2800,
            names: { es: "Gran Espada de Saronita Pura", en: "Bismuth Greatsword", de: "Bismut-Großschwert", fr: "Grande épée en bismuth", pt: "Montante de Bismuto" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore", de: "Bismuterz", fr: "Minerais de bismuth", pt: "Minério de Bismuto" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 15 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar", de: "Eisenbarren", fr: "Barre de fer", pt: "Barra de Ferro" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 4 },
                { id: 211250, names: { es: "Hueso primordial", en: "Primordial Bone", de: "Urknochen", fr: "Os primordial", pt: "Osso Primordial" }, source: { es: "👾 Drop: Bestias de Isla Dorn", en: "👾 Drop: Isle of Dorn Beasts", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 2 }
            ]
        },
        "shield_heavy": {
            prof: "blacksmithing", salePrice: 1950,
            names: { es: "Pavés de Acero Real", en: "Royal Steel Pavise", de: "Königlicher Stahlschild", fr: "Pavois en acier royal", pt: "Pavês de Aço Real" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore", de: "Bismuterz", fr: "Minerais de bismuth", pt: "Minério de Bismuto" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 12 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar", de: "Eisenbarren", fr: "Barre de fer", pt: "Barra de Ferro" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 3 }
            ]
        },
        "cuirass_plate": {
            prof: "blacksmithing", salePrice: 3500,
            names: { es: "Coraza de Batalla Inquebrantable", en: "Unbreakable Battle Cuirass", de: "Unzerbrechlicher Kürass", fr: "Cuirasse de bataille incassable", pt: "Couraça de Batalha Indestrutível" },
            materials: [
                { id: 211100, names: { es: "Mineral de Bismuto", en: "Bismuth Ore", de: "Bismuterz", fr: "Minerais de bismuth", pt: "Minério de Bismuto" }, source: { es: "⛏️ Minería: Khaz Algar", en: "⛏️ Mining: Khaz Algar", de: "⛏️ Bergbau", fr: "⛏️ Minage", pt: "⛏️ Mineração" }, qty: 20 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar", de: "Eisenbarren", fr: "Barre de fer", pt: "Barra de Ferro" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 6 }
            ]
        },

        // --- ENCANTAMIENTO ---
        "enchant_weapon": {
            prof: "enchanting", salePrice: 1850,
            names: { es: "Encantamiento de Arma: Divisa Flamígera", en: "Enchant Weapon - Authority", de: "Waffenverzauberung - Autorität", fr: "Ench. d'arme - Autorité", pt: "Encantar Arma - Autoridade" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust", de: "Staub", fr: "Poussière", pt: "Pó" }, source: { es: "✨ Desencantar equipo verde", en: "✨ Disenchanting Green Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 8 },
                { id: 224005, names: { es: "Esencia cósmica mayor", en: "Shimmering Crystal", de: "Schimmernder Kristall", fr: "Cristal scintillant", pt: "Cristal Cintilante" }, source: { es: "✨ Desencantar equipo azul", en: "✨ Disenchanting Blue Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 4 },
                { id: 224010, names: { es: "Cristal de vacío", en: "Eternium Dust", de: "Eterniumstaub", fr: "Poussière d'éternium", pt: "Pó de Eternium" }, source: { es: "✨ Desencantar equipo épico", en: "✨ Disenchanting Epic Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 1 }
            ]
        },
        "enchant_ring": {
            prof: "enchanting", salePrice: 950,
            names: { es: "Encantamiento de Anillo: Velocidad Radiante", en: "Enchant Ring - Radiant Speed", de: "Ringverzauberung - Strahlende Tempo", fr: "Ench. d'anneau - Vitesse radiante", pt: "Encantar Anel - Velocidade Radiante" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust", de: "Staub", fr: "Poussière", pt: "Pó" }, source: { es: "✨ Desencantar equipo verde", en: "✨ Disenchanting Green Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 5 },
                { id: 224005, names: { es: "Esencia cósmica mayor", en: "Shimmering Crystal", de: "Schimmernder Kristall", fr: "Cristal scintillant", pt: "Cristal Cintilante" }, source: { es: "✨ Desencantar equipo azul", en: "✨ Disenchanting Blue Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 2 }
            ]
        },
        "enchant_cloak": {
            prof: "enchanting", salePrice: 720,
            names: { es: "Encantamiento de Capa: Gracia Alada", en: "Enchant Cloak - Winged Grace", de: "Umhangverzauberung - Gekonnter Sprung", fr: "Ench. de cape - Grâce ailée", pt: "Encantar Capa - Graça Alada" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust", de: "Staub", fr: "Poussière", pt: "Pó" }, source: { es: "✨ Desencantar equipo verde", en: "✨ Disenchanting Green Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 4 },
                { id: 224010, names: { es: "Cristal de vacío", en: "Eternium Dust", de: "Eterniumstaub", fr: "Poussière d'éternium", pt: "Pó de Eternium" }, source: { es: "✨ Desencantar equipo épico", en: "✨ Disenchanting Epic Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 1 }
            ]
        },
        "enchant_chest": {
            prof: "enchanting", salePrice: 2400,
            names: { es: "Encantamiento de Pecho: Estadísticas Gloriosas", en: "Enchant Chest - Glorious Stats", de: "Brustverzauberung - Glorreiche Werte", fr: "Ench. de torse - Statistiques glorieuses", pt: "Encantar Peitoral - Atributos Gloriosos" },
            materials: [
                { id: 224001, names: { es: "Polvo abisal", en: "Storm Dust", de: "Staub", fr: "Poussière", pt: "Pó" }, source: { es: "✨ Desencantar equipo verde", en: "✨ Disenchanting Green Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 12 },
                { id: 224010, names: { es: "Cristal de vacío", en: "Eternium Dust", de: "Eterniumstaub", fr: "Poussière d'éternium", pt: "Pó de Eternium" }, source: { es: "✨ Desencantar equipo épico", en: "✨ Disenchanting Epic Gear", de: "✨ Entzaubern", fr: "✨ Désenchantement", pt: "✨ Desencantar" }, qty: 2 }
            ]
        },

        // --- PELETERÍA ---
        "armor_kit": {
            prof: "leatherworking", salePrice: 340,
            names: { es: "Kit de Armadura Reforzado", en: "Reinforced Armor Kit", de: "Verstärktes Rüstungsset", fr: "Kit d'armure renforcé", pt: "Kit de Armadura Reforçado" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather", de: "Leder", fr: "Cuir", pt: "Couro" }, source: { es: "🔪 Desuello: Bestias de TWW", en: "🔪 Skinning: TWW Beasts", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 8 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale", de: "Schuppe", fr: "Écaille", pt: "Escama" }, source: { es: "🔪 Desuello de élites", en: "🔪 Elite Skinning", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 3 }
            ]
        },
        "boots_leather": {
            prof: "leatherworking", salePrice: 1600,
            names: { es: "Botas de Merodeador Sombrío", en: "Shadow Prowler Boots", de: "Stiefel des Schattenpürschers", fr: "Bottes de rôdeur de l'ombre", pt: "Botas de Prowlador Sombrio" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather", de: "Leder", fr: "Cuir", pt: "Couro" }, source: { es: "🔪 Desuello", en: "🔪 Skinning", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 12 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale", de: "Schuppe", fr: "Écaille", pt: "Escama" }, source: { es: "🔪 Desuello", en: "🔪 Skinning", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 4 }
            ]
        },
        "legs_scaled": {
            prof: "leatherworking", salePrice: 2900,
            names: { es: "Pantalones de Escama Feroz", en: "Fierce Scaled Leggings", de: "Gamaschen der wilden Schuppen", fr: "Jambières en écaille féroce", pt: "Perneiras de Escama Feroz" },
            materials: [
                { id: 218001, names: { es: "Cuero basto", en: "Leather", de: "Leder", fr: "Cuir", pt: "Couro" }, source: { es: "🔪 Desuello", en: "🔪 Skinning", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 16 },
                { id: 218005, names: { es: "Escama endurecida", en: "Scale", de: "Schuppe", fr: "Écaille", pt: "Escama" }, source: { es: "🔪 Desuello", en: "🔪 Skinning", de: "🔪 Kürschnerei", fr: "🔪 Dépeçage", pt: "🔪 Esfolamento" }, qty: 6 }
            ]
        },

        // --- SASTRERÍA ---
        "cloth_bolt": {
            prof: "tailoring", salePrice: 180,
            names: { es: "Rollo de Tela Crepuscular", en: "Bolt of Weavecloth", de: "Stoffballen", fr: "Rouleau d'étoffe", pt: "Fardo de Tecido" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth", de: "Webstoff", fr: "Étoffe tissée", pt: "Tecido Tecido" }, source: { es: "👾 Drop: Humanoides (Khaz Algar)", en: "👾 Drop: Humanoids (Khaz Algar)", de: "👾 Drop: Humanoiden", fr: "👾 Butin : Humanoïdes", pt: "👾 Drop: Humanoides" }, qty: 10 }
            ]
        },
        "robe_spellfire": {
            prof: "tailoring", salePrice: 2400,
            names: { es: "Vestimentas de Tejefuego", en: "Spellfire Robes", de: "Robe des Zauberfeuers", fr: "Robes de feu de sort", pt: "Vestimentas de Fogo Mágico" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth", de: "Webstoff", fr: "Étoffe tissée", pt: "Tecido Tecido" }, source: { es: "👾 Drop: Humanoides", en: "👾 Drop: Humanoids", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 16 },
                { id: 219005, names: { es: "Seda tejida de éter", en: "Ether Silk", de: "Ätherseide", fr: "Soie éthérée", pt: "Seda Etérea" }, source: { es: "👾 Drop: Lanzadores de hechizos", en: "👾 Drop: Spellcasters", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 4 }
            ]
        },
        "mantle_weave": {
            prof: "tailoring", salePrice: 1850,
            names: { es: "Manto de Hilado Arcano", en: "Arcane Spun Mantle", de: "Arkanes Gespinnst", fr: "Manteau tissé d'arcane", pt: "Manto de Tecido Arcano" },
            materials: [
                { id: 219001, names: { es: "Fibra crepuscular", en: "Weavecloth", de: "Webstoff", fr: "Étoffe tissée", pt: "Tecido Tecido" }, source: { es: "👾 Drop: Humanoides", en: "👾 Drop: Humanoids", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 12 },
                { id: 219005, names: { es: "Seda tejida de éter", en: "Ether Silk", de: "Ätherseide", fr: "Soie éthérée", pt: "Seda Etérea" }, source: { es: "👾 Drop: Lanzadores de hechizos", en: "👾 Drop: Spellcasters", de: "👾 Drop", fr: "👾 Butin", pt: "👾 Drop" }, qty: 3 }
            ]
        },

        // --- INGENIERÍA ---
        "tinker_item": {
            prof: "engineering", salePrice: 750,
            names: { es: "Micro-ajustador Térmico", en: "Scope / Tinker Component", de: "Tüftler-Komponente", fr: "Composant d'ingénieur", pt: "Componente de Engenharia" },
            materials: [
                { id: 220001, names: { es: "Tornillo de cobalto", en: "Bolt", de: "Bolzen", fr: "Boulon", pt: "Parafuso" }, source: { es: "⚙️ Ingeniería / Proveedores", en: "⚙️ Engineering / Vendors", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 6 },
                { id: 220005, names: { es: "Muelle de precisión", en: "Spring", de: "Feder", fr: "Ressort", pt: "Mola" }, source: { es: "⚙️ Ingeniería general", en: "⚙️ General Engineering", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 2 }
            ]
        },
        "goggles_eng": {
            prof: "engineering", salePrice: 2100,
            names: { es: "Gafas de Espectro Óptico", en: "Optical Spectrum Goggles", de: "Optische Spektrum-Schutzbrille", fr: "Lunettes à spectre optique", pt: "Óculos de Espectro Óptico" },
            materials: [
                { id: 220001, names: { es: "Tornillo de cobalto", en: "Bolt", de: "Bolzen", fr: "Boulon", pt: "Parafuso" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 10 },
                { id: 220005, names: { es: "Muelle de precisión", en: "Spring", de: "Feder", fr: "Ressort", pt: "Mola" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 4 },
                { id: 211200, names: { es: "Barra de titanio", en: "Iron Bar", de: "Eisenbarren", fr: "Barre de fer", pt: "Barra de Ferro" }, source: { es: "🔨 Fundición", en: "🔨 Smelting", de: "🔨 Schmelzen", fr: "🔨 Fonderie", pt: "🔨 Fundição" }, qty: 2 }
            ]
        },
        "bomb_thermal": {
            prof: "engineering", salePrice: 420,
            names: { es: "Carga Térmica Volátil", en: "Volatile Thermal Charge", de: "Volatile Thermalladung", fr: "Charge thermique volatile", pt: "Carga Térmica Volátil" },
            materials: [
                { id: 220001, names: { es: "Tornillo de cobalto", en: "Bolt", de: "Bolzen", fr: "Boulon", pt: "Parafuso" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 5 },
                { id: 220005, names: { es: "Muelle de precisión", en: "Spring", de: "Feder", fr: "Ressort", pt: "Mola" }, source: { es: "⚙️ Ingeniería", en: "⚙️ Engineering", de: "⚙️ Ingenieurskunst", fr: "⚙️ Ingénierie", pt: "⚙️ Engenharia" }, qty: 1 }
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
