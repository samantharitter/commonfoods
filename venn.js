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

// Return whether this is a top-level diet
function isDiet(name) {
    if (!name in groups) {
        console.log(name + " is not a group.");
        return;
    }

    return "no" in groups[name];
}

// Remove all child foods from the array
function removeFoods(name, foods) {
    if (!name in groups) {
        console.log(name + " is not a group.");
        return;
    }

    var children = [];
    appendFoods(name, children);
    for (var i = 0; i < children.length; i++) {
        var food = children[i];
        var index = foods.indexOf(food);
        if (index != -1) {
            foods.splice(index, 1);
        }
    }
}

// Append foods in parent groups and leaf groups
function appendFoodGroup(name, foods) {
    console.log("appending foods from " + name);
    var obj = groups[name];
    if (!obj) return;

    // if there's a "foods" list append them all
    if ("foods" in obj) {
        var groupFoods = obj["foods"];
        for (var i = 0; i < groupFoods.length; i++) {
            // do not add duplicate foods
            var food = groupFoods[i];
            if (foods.indexOf(food) == -1) {
                foods.push(food);
            }
        }
    }

    // for each group in the "groups" list, append them all
    if ("groups" in obj) {
        for (var i = 0; i < obj["groups"].length; i++) {
            appendFoodGroup(obj["groups"][i], foods);
        }
    }
}

// For the given diet, assemble a full list of allowed, deduplicated foods.
function appendFoods(name, foods) {
    console.log("appending foods from " + name);
    var obj = groups[name];
    if (!obj) return;

    // if this is not a top-level diet, it's just a group (no recursion).
    if (!isDiet(name)) {
        appendFoodGroup(name, foods);
        return;
    }

    // for each diet, append all foods.
    var hasDiets = false;
    if ("diets" in obj) {
        var diets = obj["diets"];
        for (var i = 0; i < diets.length; i++) {
            appendFoods(diets[i], foods);
            hasDiets = true;
        }
    }

    var noList = [];
    var noFoods = [];

    if ("groups" in obj["no"]) {
        noList = obj["no"]["groups"];
    }

    if ("foods" in obj["no"]) {
        noFoods = obj["no"]["foods"];
    }

    // if this diet included other diets, don't inherit all foods.
    // for each group that is not in the "no" list, append all foods (recursive)
    if (!hasDiets) {
        for (var key in groups) {
            // skip object properties
            if (groups.hasOwnProperty(key)) {
                // don't add ourselves, don't add "no" groups, don't add other diets
                if (key != name && noList.indexOf(key) == -1 && !isDiet(key)) {
                    appendFoods(key, foods);
                }
            }
        }
    }

    // for each group in the "no" list, remove any foods that made it into the list
    for (var i = 0; i < noList.length; i++) {
        removeFoods(noList[i], foods);
    }

    // todo... what to do with this list? idk.
    var yesList = [];
    var yesFoods = [];
    if ("yes" in obj) {
        if ("groups" in obj["yes"]) {
            yesList = obj["yes"]["groups"];
        }
        if ("foods" in obj["yes"]) {
            yesFoods = obj["yes"]["foods"];
        }
    }

    // for each group in the "yes" list, add them back in
    for (var i = 0; i < yesList.length; i++) {
        appendFoodGroup(yesList[i], foods);
    }

    // for each food in the "yes" list, add to the list
    for (var i = 0; i < yesFoods.length; i++) {
        if (foods.indexOf(yesFoods[i]) == -1) {
            foods.push(yesFoods[i]);
        }
    }

    // for each food in the "no" list, remove from the list
    for (var i = 0; i < noFoods.length; i++) {
        var index = foods.indexOf(noFoods[i]);
        if (index != -1) {
            foods.splice(index, 1);
        }
    }
};

// Returns an object of the following form:
// {
//   "common" : [],
//   "lhs"    : [],
//   "rhs"    : []
// }
function vennDiagram(lhs, rhs) {
    var venn = {};
    var common = [];

    var lhsOnly = [];
    var rhsOnly = rhs;

    // go through lhs, see what is also in group 2, return this
    for (var i = 0; i < lhs.length; i++) {
        var index = rhs.indexOf(lhs[i]);
        if (index != -1) {
            common.push(lhs[i]);
            rhsOnly.splice(index, 1);
        } else {
            lhsOnly.push(lhs[i]);
        }
    }

    venn["common"] = common;
    venn["lhs"] = lhsOnly;
    venn["rhs"] = rhsOnly;

    console.log(venn);
    return venn;
}

function makeFoodString(label, foods) {
    var s = label;

    s += ":<br/><br/>";

    for (var i = 0; i < foods.length; i++) {
        s += foods[i] + "<br/>";
    }

    return s;
}

function renderVenn(lhs, rhs) {
    var lhsFoods = [];
    var rhsFoods = [];

    appendFoods(lhs, lhsFoods);
    appendFoods(rhs, rhsFoods);

    var venn = vennDiagram(lhsFoods, rhsFoods);

    venn["lhs"].sort();
    venn["common"].sort();
    venn["rhs"].sort();

    $("#lhs").html(makeFoodString(lhs, venn["lhs"]));
    $("#common").html(makeFoodString("both", venn["common"]));
    $("#rhs").html(makeFoodString(rhs, venn["rhs"]));
}

renderVenn("vegan", "Sam");
