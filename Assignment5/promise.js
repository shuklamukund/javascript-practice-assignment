function greetWithName(name) {
    return new Promise((resolve, reject) => {
        if (typeof name !== "string") {
            reject(new Error("Invalid input, name should be a string."));
        } else {
            const greeting = `Hello, ${name}!`;
            resolve(greeting);
        }
    });
}

// Example usage
const name = "Mithun";

greetWithName(name)
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error.message);
    });