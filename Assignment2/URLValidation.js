function checkValidURL(input) {
    const urlRegex = /^(https?:\/\/)[A-Za-z0-9-._~:/?#[\]@!$&'()*+,;=%]+[A-Za-z]+$/;
  
    if (urlRegex.test(input)) {
      console.log(`${input} is a valid URL.`);
    } else {
      console.log(`${input} is not a valid URL.`);
    }
  }
  
  // Example usage:
  checkValidURL('http://example.com');
  checkValidURL('https://www.example.com');
  checkValidURL('ftp://example.com');
  checkValidURL('invalid-url');