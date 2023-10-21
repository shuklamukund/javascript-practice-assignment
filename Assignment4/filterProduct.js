function filterProductsByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}


const products = [
    { name: "Product A", category: "Electronics" },
    { name: "Product B", category: "Clothing" },
    { name: "Product C", category: "Electronics" },
    { name: "Product D", category: "Home" }
];


const filterElectronics = filterProductsByCategory(products);
const electronicsProducts = filterElectronics("Electronics");

console.log(electronicsProducts);