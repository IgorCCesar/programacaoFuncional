const shoppingCart = [
  {name: 'Caneta', amount: 10, price: 7.99, fragile: true},
  {name: 'Impressora', amount: 1, price: 649.50, fragile: true},
  {name: 'Caderno', amount: 4, price: 27.90, fragile: false},
  {name: 'Lapis', amount: 3, price: 5.82, fragile: false},
  {name: 'Tesoura', amount: 1, price: 19.20, fragile: true},
];

//1. fragile: true
//2. amount * price 27.10
//3. media totais dentro do processo

const isFragile = item => item.fragile;

const getTotal = item => item.amount * item.price;

const initialAverage = {amount: 0, total: 0, media: 0};
const getMedia = (acc, item) => {
  const newAmount = acc.amount + 1;
  const newTotal = acc.total + item

  return {
    amount: newAmount,
    total: newTotal,
    media: newTotal / newAmount
  };
};

const challengeProcess = shoppingCart
  .filter(isFragile)
  .map(getTotal)
  .reduce(getMedia, initialAverage);

console.log(challengeProcess);

Array.prototype.myReduce = function(fn, initial) {
  let acc = initial;

  for(let i = 0; i < this.length; i++) {
    if(!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    };
  };
  return acc;
};