// somar(3)(4)(5)

function somar(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
};

const somarAB = somar(3)(4);
console.log(somarAB(13))

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(x) {
  return function(y) {
    return function(fn) {
      return fn(x, y);
    };
  };
};

const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);

console.log(r1);
console.log(r2)