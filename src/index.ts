// Write a Function to Handle API Calls and Display Data:

/*Use fetchProductCatalog() to fetch product details and display them.
For each product, fetch the reviews using fetchProductReviews(productId).
After fetching products and reviews, retrieve the sales report using fetchSalesReport().*/
import { error } from "console";
import {
  Product,
  Reviews,
  Sales,
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";

function displayProductData() {
  console.log("Fetching product catalog...");

  //Fetch product catalog and display products
  fetchProductCatalog()
    .then((products: Product[]) => {
      console.log("Product Catalog");
      products.forEach((product) => {
        console.log(
          `ID: ${product.id} Name: ${product.name} Price: ${product.price}`
        );
      });

      //Fetch reviews for each product
      const reviewPromises = products.map((product) =>
        fetchProductReviews(product.id)
          .then((reviews: Reviews[]) => {
            console.log(`\nReviews for ${product.name} (ID: ${product.id}):`);
            console.table(reviews);
          })
          .catch((error) => {
            console.error(
              `Error Fetching Reviews for ${product.name} (ID: ${product.id}):`,
              error
            );
          })
      );

      //Wait for all reviews to be fetched
      return Promise.all(reviewPromises);
    })
    .then(() => {
      console.log("\nFetching sales report...");

      //Fetch and display sales report
      return fetchSalesReport()
        .then((salesReport: Sales) => {
          console.log("\nSales Report:");
          console.table([salesReport]);
        })
        .catch((error) => {
          console.error("Error fetching sales report:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching product catalog:", error);
    })
    .finally(() => {
      console.log("\nAll api calls have been checked");
    });
}

displayProductData();
