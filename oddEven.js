// oddEven.js

// Function to generate a random number between 1 and 100
function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 101) + 1;

  // Get the "number" div element by its ID
  let numberDiv = document.getElementById('number');
  numberDiv.textContent = randomNumber

  // Invoke the checkOddEven function with the generated number as an argument
  checkOddEven(randomNumber);
}

// Function to check if a number is odd or even and update the "odd-even" div
function checkOddEven(num) {
  // Get the "odd-even" div element by its ID
  let output = document.getElementById('odd-even');

  // Check if the number is even or odd and update the "odd-even" div accordingly
  if (num % 2 == 0) {
      output.textContent = "The number is even";
  } else {
      output.textContent = "The number is odd";
  }
}

// Attach an event listener to the "generate-number" button to invoke the generateNumber function on click
window.onload = function () {
  let btn=document.getElementById('generate-number')
   btn.addEventListener('click', function(){
    generateNumber()
   });
};

// Do not change the following export statement
if (typeof exports !== 'undefined') {
  module.exports = {
      generateNumber,
      checkOddEven,
  };
}
