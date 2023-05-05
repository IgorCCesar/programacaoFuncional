function exec(fn, a, b) {
  return fn(a, b);
};

const somaNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);

exec(somaNoTerminal, 56, 38);
exec(subtrairNoTerminal, 56, 38);

const cb = () => console.log('Exec...');
setInterval(cb, 3000);