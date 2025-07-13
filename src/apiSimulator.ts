//Simulates fetching a list of products, each with id, name, and price.

export const fetchProductCatalog = (): Promise<
  { id: number; name: string; price: number }[]
> => {
  return new Promise((resolve, reject) => {
    //Resolve the Promise with an array of mock products after a 1-second delay.
    setTimeout(() => {
      //Use Math.random() to sometimes reject the Promise with an error message
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
