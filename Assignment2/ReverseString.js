function reverseStringWithDelay(input) {
  setTimeout(function() {
    const reversedString = input.split('').reverse().join('');
    console.log(`Reversed string: ${reversedString}`);
  }, 2000); 
}

// Example 
const input = 'Hello, World!';
console.log(`Original string: ${input}`);
reverseStringWithDelay(input);