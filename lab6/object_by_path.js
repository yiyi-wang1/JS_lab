Object.prototype.getByPath = function (string) {
    let arr = string.split(".");
    if (arr.length == 0) {
        return undefined;
    }
    let obj = this;
    for (str of arr) {
        if (Object.hasOwn(obj, str)) {
            obj = obj[str];
        } else {
            return undefined;
        }
    }
    return obj;
}

const obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.getByPath('person.name')); // 'joe'
// gets value of `bio` in value of `history` in value of `person` in `obj`

console.log(obj.getByPath('person.history.bio')); // { funFact: 'I like fishing.' }
//  `homeStreet` doesn't exist, then return `undefined`

console.log(obj.getByPath('person.history.homeStreet')); // undefined
// `animal` doesn't exist, then return `undefined`

console.log(obj.getByPath('person.animal.pet.needNoseAntEater')); // undefined