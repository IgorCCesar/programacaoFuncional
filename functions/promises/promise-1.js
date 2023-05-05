const firstElement = arrayOuString => arrayOuString[0];
const letterLowerCase =  letter => letter.toLowerCase();

new Promise(function(resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
  .then(firstElement)
  .then(firstElement)
  .then(letterLowerCase)
  .then(console.log)