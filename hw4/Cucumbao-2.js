let Vector = function (components) {
    if (components === undefined || typeof components !== "object") {
        throw "Improper argument; need an array object"
    }

    const l = components.length;
    const _sorted = components.sort();

    return {
        array: _sorted,

        add: function (v) {
            v = validateVector(v, l);
            let sum = [];
            for (let i = 0; i < l; i++) {
                sum[i] = v[i] + this.array[i];
            }
            return new Vector(sum);
        },

        subtract: function (v) {
            v = validateVector(v, l);
            let sum = [];
            for (let i = 0; i < l; i++) {
                sum[i] = this.array[i] - v[i];
            }
            return new Vector(sum);
        },

        dot: function (v) {
            v = validateVector(v, l);
            let sum = 0;
            for (let i = 0; i < l; i++) {
                sum += this.array[i] * v[i];
            }
            return sum;
        },

        norm: function () {
            let norm = 0;
            for (let i = 0; i < l; i++) {
                norm += Math.pow(this.array[i], 2);
            }
            return Math.pow(norm, 0.5)
        },

        toString: function () {
            return "(" + components.toString() + ")";
        },

        equals: function (v) {
            for (let i = 0; i < l; i++) {
                return v.array[i] === this.array[i];
            }
        }
    }
};

function validateVector(v, l) {
    if ( v === undefined || v.array === undefined ) {
        throw "v or v.array undefined";
    }
    if ( v.array.length === l ) {
        return v.array.sort();
    } else {
        throw "Error: Not the same size vector."
    }
}
let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
let c = new Vector([5, 6, 7, 8]);
console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());
console.log(a.add(c));