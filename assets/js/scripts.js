var currentNumber = 0;
var currentNumberWrapper = document.getElementById("currentNumber");

function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
  console.log(`Estou adicionando o número: ${currentNumber}`);
}

function decrement() {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
  console.log(`Estou subtraindo o número: ${currentNumber}`);
}