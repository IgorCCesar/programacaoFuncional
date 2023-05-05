const numbers = [1, 2, 3, 4, 5, 6];

const numbersV2 = element => element * 2;

console.log(numbers.map(numbersV2));

const students = [
  { name: 'Jake', score: 6.4},
  { name: 'Susan', score: 8.6},
  { name: 'Emma', score: 9.4},
  { name: 'Peter', score: 9.1}, 
];

const scoreStudents = students.map(element => Math.round(element.score));

console.log(scoreStudents);