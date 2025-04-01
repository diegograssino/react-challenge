import productsMock from "../mocks/products.js";
import stockPriceMock from "../mocks/stock-price.js";

export const productsService = () => {
  const result = productsMock.map((product) => {
    const skus = product.skus.map((sku) => {
      const stockPrice = stockPriceMock[sku.code] || { stock: 0, price: 0 };

      return { code: sku.code, name: sku.name, ...stockPrice };
    });

    return { ...product, skus };
  });

  return result;
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
