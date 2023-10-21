function generateRandomNumberWithDelay(delay) {
    let remainingTime = delay;
  
    const interval = setInterval(function() {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(interval);
  
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000); 
  

  }
  
  // Example 
  const delayInSeconds = 3;
  generateRandomNumberWithDelay(delayInSeconds);