// This file requires the inclusion of a file that defines a global
// variable called "groups," which should be a dictionary of the following
// form:
//
// var groups = {
//
//   // some food group
//   "apples" : {
//      "groups" : [],
//      "foods"  : [ "granny smith", "red delicious" ]
//   },
//
//   // some diet that uses them
//   "the no apple diet" : {
//      "yes" : {},
//      "no"  : {
//         "groups" : [ "apples" ]
//      }
//   }
// };

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

renderVenn("vegan", "AIP");
