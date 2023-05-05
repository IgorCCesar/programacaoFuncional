const shoppingCart = [
  {name: 'Caneta', amount: 10, price: 7.99},
  {name: 'Impressora', amount: 0, price: 499.50},
  {name: 'Caderno', amount: 4, price: 27.90},
  {name: 'Lapis', amount: 3, price: 5.82},
  {name: 'Tesoura', amount: 1, price: 19.20},
];

const getName = element => element.name;
const quantityGreaterThanZero = element => element.amount > 0;
const validItems = shoppingCart
  .filter(quantityGreaterThanZero)
  .map(getName);


console.log(validItems);

//Meu Filter
Array.prototype.meuFilter = function(fn) {
  const newArray = [];

  for(let i = 0; i < this.length; i++){
    if(fn(this[i], i, this)) {
      newArray.push(this[i]);
    };
  };
  return newArray;
};