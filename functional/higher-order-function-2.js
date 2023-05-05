// curring
function finalPrice(impost) {
  return function(price) {
    return price * (1 + impost);
  };
};

const newYorkFinalPrice = finalPrice(0.0875);

console.log(newYorkFinalPrice(25.1));
console.log(newYorkFinalPrice(21.7));
console.log(newYorkFinalPrice(107.9));