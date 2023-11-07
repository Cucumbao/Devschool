const object1 = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

function getRootProperty(object, target) {
    for (let prop in object) {
        if (typeof object[prop] === 'object') {
            const result = getRootProperty(object[prop], target);
            if (result !== null) {
                return prop;
            }
        } else if (object[prop] == target)  {
            return prop;
        }
    }
    return null;
}

const result = getRootProperty(object1, 9);
console.log(result);