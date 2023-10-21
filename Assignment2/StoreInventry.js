const itemsAndPricesInUSD = {
    item1: 10,
    item2: 25,
    item3: 15,
    item4: 30,
  };
  
  // Function to convert USD to Indian Rupees using the exchange rate of 1 USD to 80 INR
  function convertToRupees(priceInUSD) {
    const exchangeRate = 80;
    return priceInUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with the converted prices in Rupees
  const itemsAndPricesInRupees = Object.fromEntries(
    Object.entries(itemsAndPricesInUSD).map(([item, priceInUSD]) => [
      item,
      convertToRupees(priceInUSD),
    ])
  );
  
  // Display the new object with prices in Indian Rupees
  console.log(itemsAndPricesInRupees);