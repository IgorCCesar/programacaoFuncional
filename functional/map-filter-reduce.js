const students = [
  { name: 'Jake', score: 6.4},
  { name: 'Susan', score: 8.6},
  { name: 'Emma', score: 9.4},
  { name: 'Peter', score: 9.1}, 
];

const greatStudent = student => student.score >= 9;
const getScore = el => el.score;
const finalMedia = (total, item, index, array) => {
  if(index === array.length - 1) {
    return (total + item) / array.length
  } else {
      return total + item;
  }
};

console.log(
  students
    .filter(greatStudent)
    .map(getScore)
    .reduce(finalMedia)
);