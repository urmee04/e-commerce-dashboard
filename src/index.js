"use strict";
// Write a Function to Handle API Calls and Display Data:
Object.defineProperty(exports, "__esModule", { value: true });
/*Use fetchProductCatalog() to fetch product details and display them.
For each product, fetch the reviews using fetchProductReviews(productId).
After fetching products and reviews, retrieve the sales report using fetchSalesReport().*/
const apiSimulator_1 = require("./apiSimulator");
//fetchProductCatalog() to fetch product details and display them.
(0, apiSimulator_1.fetchProductCatalog)().then((products) => {
    console.log("Product Catalog");
    products.forEach((product) => {
        console.log(`ID:${product.id} Name:${product.name} Price:${product.price}`);
    });
});
