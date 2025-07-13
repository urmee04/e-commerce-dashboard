//define a reusable interface for product
export interface Product {
  id: number;
  name: string;
  price: number;
}

//Simulates fetching a list of products, each with id, name, and price.

export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    //Resolve the Promise with an array of mock products after a 1-second delay.
    setTimeout(() => {
      //Use Math.random() to sometimes reject the Promise with an error message(20% of the time)
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject("Failed to fetch product catalog");
      }
    }, 1000);
  });
};
// -----------------------------------------------------------------------------
//define an interace for reviews
export interface Reviews {
  productId: number;
  rating: number;
  review: string;
}

//Simulates fetching product reviews, each with product id
export const fetchProductReviews = (): Promise<Reviews[]> => {
  return new Promise((resolve, reject) => {
    //Resolve the promise with an array of reviews after a 1.5 second delay
    setTimeout(() => {
      //Use Math.random() to sometimes reject the Promise with an error message
      if (Math.random() < 0.8) {
        resolve([
          { productId: 1, rating: 3.5, review: "Good Product" },
          {
            productId: 2,
            rating: 5,
            review: " Excellent Product",
          },
        ]);
      } else {
        reject("Failed to fetch reviews for product ID ${productId}");
      }
    }, 1500);
  });
};

//-------------------------------------------------------------------------------------
