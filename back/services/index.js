import productsMock from "../mocks/products.js";
import stockPriceMock from "../mocks/stock-price.js";

export const productsService = () => {
  return productsMock;
};

export const stockPriceBySKU = (sku) => {
  let result = undefined;
  const stockPrice = stockPriceMock[sku];

  // Use this code to update the price and stock and test the 5 secs update feature on the front
  // stockPrice.price = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
  // stockPrice.stock = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  if (stockPrice) {
    result = stockPrice;
  }

  return result;
};
