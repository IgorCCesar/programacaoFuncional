const shoppingCart = [
  {name: 'Caneta', amount: 10, price: 7.99},
  {name: 'Impressora', amount: 0, price: 499.50},
  {name: 'Caderno', amount: 4, price: 27.90},
  {name: 'Lapis', amount: 3, price: 5.82},
  {name: 'Tesoura', amount: 1, price: 19.20},
];

const getTotal = item => item.amount * item.price;
const valueTotal = (acc, el) => acc + el;

const resultGetTotal = shoppingCart
  .map(getTotal)
  .reduce(valueTotal)

console.log(resultGetTotal)