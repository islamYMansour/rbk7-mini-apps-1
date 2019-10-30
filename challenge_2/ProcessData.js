var processData = function(jsonObject) {
    var keys = {};
    var result = [];
    var recurse = function(node) {
        // console.log(node);
        if (node.children.length === 0) {
            return "";
        }

        node.children.forEach(child => {
            for (var key in child) {
                if (key !== "children") keys[key] = true;
            }
            recurse(child);
        });
    };
    recurse(jsonObject);
    return keys;
};










var getAttributes = function(jsonObject) {
    var result = [];
    var keys = Object.keys(processData(jsonObject));
    console.log(keys);
    var recurse = function(node) {
        var childResult = [];

        for (var i = 0; i < keys.length; i++) {
            if (node.hasOwnProperty(keys[i])) {
                if (keys[i] !== "children") childResult[i] = node[keys[i]];
            } else {
                childResult[i] = null;
            }
        }
        result.push(childResult);
        if (node.children.length === 0) {
            return "";
        }

        node.children.forEach(child => {
            recurse(child);
        });
    };
    recurse(jsonObject);

    // console.log(result);

    result.unshift(keys);

    var stringResult = "";

    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].length; j++) {
            if (result[i][j] === null) {
                stringResult += "";
            } else stringResult += result[i][j];
            if (i !== result[i].length - 1) {
                stringResult += ",";
            }
        }
        stringResult += "\n";
    }

    return stringResult;
};

module.exports.getAttributes = getAttributes;