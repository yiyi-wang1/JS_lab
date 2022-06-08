// function Vector(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
// }


// Vector.prototype.plus = function (v1) {
//     const res = new Vector(this.x + v1.x, this.y + v1.y, this.z + v1.z);
//     return res;
// }

// Vector.prototype.minus = function (v1) {
//     const res = new Vector(this.x - v1.x, this.y - v1.y, this.z - v1.z);
//     return res;
// }

// Vector.prototype.magnitude = function () {
//     return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
// }

class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    plus(v1) {
        const res = new Vector(this.x + v1.x, this.y + v1.y, this.z + v1.z);
        return res;
    }

    minus(v1) {
        const res = new Vector(this.x - v1.x, this.y - v1.y, this.z - v1.z);
        return res;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}

let v1 = new Vector(4, 4, 0);
let v2 = new Vector(1, 2, 2);


console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}


console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}


console.log(v1.magnitude()) // returns 5.656854249492381
console.log(v2.magnitude()) // returns 3