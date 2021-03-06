// Food groups to power our script
var groups = {

    "gluten" : {
        "name" : "gluten",
        "summary" : "wheat, spelt, rye, barley",
        "groups" : [],
        "foods" : [ "wheat",
                    "soy sauce",
                    "barley",
                    "spelt",
                    "rye",
                    "malt",
                    "ancient grains",
                    "beer" ]
    },

    "nightshades" : {
        "name" : "nightshades",
        "summary" : "the solanacaea family",
        "groups" : [],
        "foods" : [ "tomatoes",
                    "chili flakes",
                    "bell peppers",
                    "hot peppers",
                    "white potatoes",
                    "eggplant",
                    "okra",
                    "tomatillos",
                    "paprika",
                    "tobacco",
                    "goji berries",
                    "cayenne pepper",
                    "potato starch",
                    "potato flour" ]
    },

    "alliums" : {
        "name" : "alliums",
        "summary" : "members of the allium family",
        "groups" : [],
        "foods" : [ "onions",
                    "garlic",
                    "shallots",
                    "leeks",
                    "scallions",
                    "chives" ] // ok for fodmap
    },

    "brassicas" : {
        "name" : "brassicas",
        "summary" : "plants in the brassica family",
        "groups" : [],
        "foods" : [ "broccoli", // ok for fodmap, sorta
                    "cauliflower",
                    "cabbage",
                    "kale", // ok for fodmap
                    "bok choy", // ok for fodmap
                    "collards",
                    "turnips",
                    "brussels sprouts",
                    "turnip greens" ]
    },

    "umbelliferae" : {
        "name" : "umbelliferae",
        "summary" : "plants whose flowers grow in umbels",
        "groups" : [],
        "foods" : [ "carrots",
                    "celery",
                    "fennel",
                    "parsnips",
                    "parsley",
                    "dill",
                    "cilantro" ]
    },

    "lamiaceae" : {
        "name" : "lamiaceae",
        "summary" : "plants whose leaves secrete oils",
        "groups" : [],
        "foods" : [ "mint",
                    "basil",
                    "lemon balm",
                    "rosemary",
                    "sage",
                    "savory",
                    "thyme",
                    "lavender",
                    "oregano" ]
    },

    "melon" : {
        "name" : "melon",
        "summary" : "melons",
        "groups" : [],
        "foods" : [ "watermelon",
                    "honeydew",
                    "cantaloupe" ]
    },

    "curcurbitacaea" : {
        "name" : "curcurbitacaea",
        "summary" : "plants that grow on vines",
        "groups" : [ "melon" ],
        "foods" : [ "pumpkins",
                    "cucumbers",
                    "squash" ]
    },
    
    "lactose" : {
        "name" : "lactose",
        "summary" : "foods derived from cow milk",
        "groups" : [],
        "foods" : [ "cow's milk",
                    "cow's milk cheese",
                    "cream cheese",
                    "mozarella cheese",
                    "butter",
                    "heavy cream",
                    "whipped cream" ]
    },

    "grains" : {
        "name" : "grains",
        "summary" : "grains",
        "groups" : [ "gluten" ],
        "foods" : [ "corn",
                    "rice",
                    "oats",
                    "buckwheat" ]
    },

    "dairy" : {
        "name" : "dairy",
        "summary" : "animal milk and derived foods",
        "groups" : [ "lactose" ],
        "foods" : [ "ghee",
                    "goat's milk",
                    "sheep's milk",
                    "goat cheese",
                    "sheep's cheese" ]
    },

    "processed fats" : {
        "foods" : [
                   "margarine",
                   "crisco",
                   "canola oil",
                   "vegetable oil",
                   "earth's balance"
                   ]
    },

    "fats" : {
        "name" : "fats",
        "summary" : "fats, for cooking",
        "groups" : [ "processed fats" ],
        "foods" : [ "coconut oil",
                    "olive oil",
                    "lard",
                    "chicken fat",
                    "duck fat",
                    "ghee",
                    "butter",
                    "palm shortening",
                    "palm oil",
                    "sesame oil",
                    "peanut oil",
                    "sunflower seed oil" ]
    },

    "soy" : {
        "name" : "soy",
        "summary" : "soy",
        "groups" : [],
        "foods" : [ "tofu",
                    "soy sauce",
                    "tempeh",
                    "edamame",
                    "soybean oil",
                    "soy milk" ]
    },

    "alcohol" : {
        "name" : "alcohol",
        "summary" : "alcoholic beverages",
        "groups" : [],
        "foods" : [ "beer",
                    "wine",
                    "hard cider",
                    "vodka",
                    "rum",
                    "whiskey",
                    "champagne" ]
    },

    "legumes" : {
        "name" : "legumes",
        "summary" : "legumes",
        "groups" : [ "soy" ],
        "foods" : [ "chickpeas",
                    "black beans",
                    "white beans",
                    "beans",
                    "lentils",
                    "peas",
                    "peanuts",
                    "kidney bean" ]
    },

    "high fodmap nuts" : {
        "name" : "high fodmap nuts",
        "summary" : "high fodmap nuts",
        "groups" : [],
        "foods" : [ "pistachios",
                    "cashews" ]
    },

    "nuts" : {
        "name" : "nuts",
        "summary" : "nuts",
        "groups" : [ "high fodmap nuts" ],
        "foods" : [ "peanuts",
                    "almonds",
                    "brazil nuts",
                    "walnuts",
                    "hazelnuts",
                    "pecans",
                    "peanut oil",
                    "walnut oil" ]
    },

    "high mercury fish" : {
        "name" : "high mercury fish",
        "summary" : "fish that contain high levels of mercury",
        "groups" : [],
        "foods" : [ "tuna",
                    "shark",
                    "swordfish",
                    "king mackerel",
                    "marlin" ]
    },

    "fish" : {
        "name" : "fish",
        "summary" : "fish",
        "groups" : [ "high mercury fish" ],
        "foods" : [ "salmon",
                    "trout",
                    "flounder",
                    "fluke",
                    "cod",
                    "sardines",
                    "anchovies",
                    "eel",
                    "tilapia",
                    "halibut",
                    "bass",
                    "catfish",
                    "basa" ]
    },

    "crustaceans" : {
        "name" : "crustaceans",
        "summary" : "sea-dwelling animals that have exoskeletons",
        "groups" : [],
        "foods" : [ "shrimp",
                    "lobster",
                    "crab",
                    "prawns",
                    "crayfish" ]
    },

    "mollusks" : {
        "name" : "mollusks",
        "summary" : "soft sea-dwelling animals that may live in shells",
        "groups" :  [],
        "foods" : [ "clams",
                    "mussels",
                    "scallops",
                    "cockles",
                    "oysters",
                    "octopus",
                    "squid" ]
    },

    "seafood" : {
        "name" : "seafood",
        "summary" : "animals that live in water",
        "groups" : [ "mollusks", "crustaceans", "fish" ],
        "foods" : []
    },

    "eggs" : {
        "name" : "eggs",
        "summary" : "eggs",
        "groups" : [],
        "foods" : [ "eggs" ]
    },

    "seeds" : {
        "name" : "seeds",
        "summary" : "seeds of plants",
        "groups" : [],
        "foods" : [ "sesame",
                    "sesame oil",
                    "black pepper",
                    "peppercorns",
                    "pumpkin seeds",
                    "sunflower seeds",
                    "sunflower seed oil",
                    "poppy seeds" ]
    },

    "poultry" : {
        "name" : "poultry",
        "summary" : "poultry",
        "groups" : [],
        "foods" : [ "chicken",
                    "turkey",
                    "duck",
                    "duck fat",
                    "chicken fat",
                    "chicken broth",
                    "quail",
                    "guinea hen",
                    "cornish hen" ]
    },

    "pork" : {
        "name" : "pork and foods derived from pigs",
        "summary" : "pork",
        "groups" : [],
        "foods" : [ "bacon",
                    "lard",
                    "pork chops",
                    "pork sausage",
                    "ground pork",
                    "pork shoulder" ]
    },

    "beef" : {
        "name" : "beef",
        "summary" : "meat derived from cows",
        "groups" : [],
        "foods" : [ "steak",
                    "hamburgers",
                    "ground beef",
                    "chuck",
                    "brisket",
                    "beef broth",
                    "tongue",
                    "veal",
                    "beef stew meat chunks",
                    "strip steak",
                    "roast beef" ]
    },

    "lamb" : {
        "name" : "lamb",
        "groups" : [],
        "foods" : [ "lamb stew chunks",
                    "lamb chops",
                    "leg of lamb" ]
    },

    "red meat" : {
        "name" : "red meat",
        "groups" : [ "lamb", "beef" ]
    },

    "meat" : {
        "name" : "meat",
        "groups" : [ "red meat", "pork" ]
    },

    "animals" : {
        "name" : "animals",
        "groups" : [ "meat", "poultry", "seafood" ]
    },

    "animal products" : {
        "name" : "animal products",
        "summary" : "any food derived from animals",
        "groups" : [ "animals", "honey", "dairy", "eggs" ]
    },

    "root vegetables" : {
        "foods" : [ "sweet potatoes",
                    "potatoes",
                    "carrots",
                    "turnips",
                    "celeriac",
                    "beets" ]
    },

    "winter squash" : {
        "foods" : [ "butternut squash",
                    "acorn squash",
                    "delicata squash",
                    "pumpkin",
                    "kabocha squash",
                    "spaghetti squash" ]
    },

    "vegetables" : {
        "foods" : [ "cucumber",
                    "celery",
                    "snow peas",
                    "arugula",
                    "zucchini",
                    "summer squash",
                    "mushrooms",
                    "lettuce",
                    "swiss chard",
                    "spinach",
                    "mustard greens",
                    "corn" ]
    },

    "fruits" : {
        "name" : "fruits",
        "summary" : "fruits",
        "groups" : [ "high fructose fruits", "melon" ],
        "foods" : [ "banana",
                    "blueberries",
                    "avocado",
                    "strawberries",
                    "oranges",
                    "passionfruit",
                    "lemon",
                    "lime",
                    "grapes",
                    "grapefruit",
                    "raspberries" ]
    },

    "high fructose fruits" : {
        "name" : "high fructose fruits",
        "summary" : "fruits that are high in fructans",
        "groups" : [],
        "foods" : [ "apples",
                    "apricots",
                    "blackberries",
                    "watermelon",
                    "cherries",
                    "dates",
                    "figs",
                    "pears",
                    "peaches" ]
    },

    "honey" : {
        "name" : "honey",
        "summary" : "honey",
        "groups" : [],
        "foods" : [ "honey" ]
    },

    "natural sweeteners" : {
        "name" : "natural sweeteners",
        "summary" : "natural sweeteners",
        "groups" : [ "honey" ],
        "foods" : [ "maple sugar",
                    "maple syrup",
                    "coconut sugar",
                    "fruit syrup" ]
    },

    "artificial sweeteners" : {
        "name" : "artificial sweeteners",
        "summary" : "artificial sweeteners",
        "groups" : [],
        "foods" : [ "xylitol",
                    "erithrytol",
                    "maltitol" ]
    },

    // Diets

    "paleo" : {
        "name" : "Paleo",
        "summary" : "Paleo",
        "yes" : {},
        "no" : {
            "groups" : [ "grains",
                         "dairy",
                         "processed fats",
                         "artificial sweeteners",
                         "alcohol",
                         "legumes" ]
        }
    },

    "AIP" : {
        "name" : "AIP",
        "summary" : "paleo autoimmune protocol",
        "diets" : [ "paleo" ],
        "yes" : {},
        "no" : {
            "groups" : [ "nightshades",
                         "nuts",
                         "seeds",
                         "eggs",
                         "soy",
                         "caffeine" ],
            "foods" : []
        }
    },

    "vegan" : {
        "name" : "Vegan",
        "summary" : "Vegans don't eat any animal products",
        "yes" : {},
        "no" : {
            "groups" : [ "animal products" ]
        }
    },

    "vegetarian" : {
        "name" : "Vegetarian",
        "summary" : "Vegetarians don't eat animals but may eat animal products",
        "diets" : [ "vegan" ],
        "yes" : {
            "groups" : [ "eggs",
                         "dairy",
                         "honey" ]
        },
        "no" : {}
    },

    "pescatarian" : {
        "name" : "Pescatarian",
        "summary" : "A person who does not eat land-dwelling animals",
        "diets" : [ "vegetarian" ],
        "yes" : {
            "groups" : [ "seafood" ]
        },
        "no" : {}
    },

    "Sam" : {
        "name" : "Sam",
        "summary" : "foods specific to what Sam can eat",
        "diets" : [ "AIP" ],
        "yes" : {
            "groups" : [],
            "foods" : [ "rice" ],
        },
        "no" : {
            "groups" : [],
            "foods" : [ "avocado" ]
        }
    }
};
