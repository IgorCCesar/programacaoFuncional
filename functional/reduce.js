const numbers = [1, 2, 3, 4, 5, 6];

const sum = (total, el) => total + el;

const total = numbers.reduce(sum);

const finalMedia = (total, item, index, array) => {
  if(index === array.length - 1) {
    return (total + item) / array.length
  } else {
      return total + item;
  }
};

const media = numbers.reduce(finalMedia)

console.log(media)
console.log(total);