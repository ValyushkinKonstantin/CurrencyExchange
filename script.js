
const currenctEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currenctEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

console.log(currenctEl_one);
console.log(currenctEl_two);

console.log(amountEl_one);
console.log(amountEl_two);




// Fetch exchange rates and update the DOM
function calculate() {
const currency_one = currenctEl_one.value;
const currency_two = currenctEl_two.value;
fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
 .then(res=>res.json())
 .then(data =>{
   const rate = data.rates[currency_two];
   rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
   amountEl_two.value = (amountEl_one.value*rate).toFixed(2);
 })
}


// Event Listeners
currenctEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currenctEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click' , () => {
  const temp = currenctEl_one.value;
  currenctEl_one.value = currenctEl_two.value;
  currenctEl_two.value = temp;
  calculate();
} );


// Main function
calculate();
