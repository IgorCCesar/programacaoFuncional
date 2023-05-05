const arrNames = ['Madiane', 'Igor', 'Yuri'];
const firstLetter = text => text[0];
console.log(arrNames.map(firstLetter));

const nums = [1, 2, 3, 4, 5, 6,];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const shoppingCart = [
  {name: 'Caneta', amount: 10, price: 7.99},
  {name: 'Impressora', amount: 0, price: 499.50},
  {name: 'Caderno', amount: 4, price: 27.90},
  {name: 'Lapis', amount: 3, price: 5.82},
  {name: 'Tesoura', amount: 1, price: 19.20},
];

const getName = item => item.name;
const getTotal = item => item.amount * item.price;
console.log(shoppingCart.map(getName));


// Criando um Map
Array.prototype.meuMap = function(fn) {
  const mapped = [];

  for(let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  };
  return mapped;
};

console.log(shoppingCart.meuMap(getTotal));