<<<<<<< HEAD
function resetCounter() {
    // Step 1: Define the resetCounter function
    let previousCounterValue = counter; // Step 2: Store the current counter value
    counter = 0; // Step 3: Reset the counter to 0 (or any desired value)
    return {
      previousValue: previousCounterValue,
      message: "Counter has been reset." // Step 4: Return the stored counter value and a reset message
    };
  }
=======
// idrees

/*
var counter = 0;

function incrementCounter() {
  return ++counter;
}

function resetCounter() {
  var previousNumber = counter;
  counter = 0;
  return { numberBeforeReset: previousNumber, resetMessage: "The counter has been reset." };
}

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
var resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);

console.log(incrementCounter());
console.log(incrementCounter());
console.log(incrementCounter());
resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);

console.log(incrementCounter());
resetInfo = resetCounter();
console.log(resetInfo.numberBeforeReset);
console.log(resetInfo.resetMessage);
*/
>>>>>>> e7d877a4a80c70fa3d8d6128cf071d42002dfc67
