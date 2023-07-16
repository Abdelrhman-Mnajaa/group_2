function resetCounter() {
    // Step 1: Define the resetCounter function
    let previousCounterValue = counter; // Step 2: Store the current counter value
    counter = 0; // Step 3: Reset the counter to 0 (or any desired value)
    return {
      previousValue: previousCounterValue,
      message: "Counter has been reset." // Step 4: Return the stored counter value and a reset message
    };
  }