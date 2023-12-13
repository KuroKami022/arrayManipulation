const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes('dog')
console.log('for', includeInArray);
console.log('includes', rta);

let array = ["ana", "santi", "nico", "anastasia"]
let term = "ana"

function filterByTerm(array, term) {
    array.includes(term)
}