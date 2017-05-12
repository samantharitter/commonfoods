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
    "groups" : [],
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
                "pecans" ]
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
                    "black pepper",
                    "peppercorns",
                    "pumpkin seeds",
                    "sunflower seeds",
                    "poppy seeds" ]
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
"AIP" : {
    "name" : "AIP",
    "summary" : "paleo autoimmune protocol",
    "yes" : {},
    "no" : {
        "groups" : [ "nightshades",
                     "grains",
                     "gluten",
                     "nuts",
                     "seeds",
                     "dairy",
                     "eggs",
                     "soy",
                     "artificial sweeteners",
                     "alcohol",
                     "caffeine",
                     "legumes" ],
            "foods" : []
        }
},
"vegan" : {
    "name" : "Vegan",
    "summary" : "Vegans don't eat any animal products",
    "yes" : {},
    "no" : {
        "groups" : [ "poultry",
                     "seafood",
                     "eggs",
                     "dairy",
                     "honey",
                     "meat" ]
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
