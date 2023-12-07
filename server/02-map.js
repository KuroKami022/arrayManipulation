const letters = ['a', 'b', 'c'];
const newArray = [];

const newArray2 = letters.map(item => item + '++');

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}

console.log('original', letters);
console.log('new', newArray);
console.log('new2', newArray2);

function solution(array) {
	return array.map(item => item * 2);
};

const array = [2,4,5,6];
const solutionArray = solution(array);

console.log(solutionArray);
console.log(solution(array));