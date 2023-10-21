function countWordOccurrences(text) {
    const words = text.split(" ");
    const wordCountMap = new Map();

    for (const word of words) {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    }

    return wordCountMap;
}

// Example usage
const inputText = "This is a sample text. This text is just a sample.";
const wordOccurrencesMap = countWordOccurrences(inputText);

// Printing the word count map
for (const [word, count] of wordOccurrencesMap.entries()) {
    console.log(`${word}: ${count}`);
}