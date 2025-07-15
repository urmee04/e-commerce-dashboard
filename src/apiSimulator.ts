//create custom error classes
class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

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
        //simulate a bad data condition e.g., empty array 20% of the time
        if (Math.random() < 0.2) {
          reject(new DataError("product catalog is empty or malformed"));
        } else {
          resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
          ]);
        }
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
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
export const fetchProductReviews = (productId: number): Promise<Reviews[]> => {
  return new Promise((resolve, reject) => {
    //Resolve the promise with an array of reviews after a 1.5 second delay
    setTimeout(() => {
      //Use Math.random() to sometimes reject the Promise with an error message
      if (Math.random() < 0.8) {
        if (Math.random() < 0.2) {
          reject(
            new DataError(`Invalid data for reviews of product id ${productId}`)
          );
        } else {
          resolve([
            { productId: 1, rating: 3.5, review: "Good Product" },
            {
              productId: 2,
              rating: 5,
              review: "Excellent Product",
            },
          ]);
        }
      } else {
        reject(
          new NetworkError(
            `Failed to fetch reviews for product ID ${productId}`
          )
        );
      }
    }, 1500);
  });
};

//-------------------------------------------------------------------------------------
// define a reusable interface for sales report
export interface Sales {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
}

// Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

export const fetchSalesReport = (): Promise<Sales> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        if (Math.random() < 0.2) {
          reject(new DataError("sales report data is incomplete or incorrect"));
        } else {
          resolve({
            totalSales: 25000,
            unitsSold: 25,
            averagePrice: 1000,
          });
        }
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};
