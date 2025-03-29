import productsMock from "../mocks/products.js";
import stockPriceMock from "../mocks/stock-price.js";

export const productsService = () => {
  // const result = productsMock.map((product) => {
  //   const skus = product.skus.map((sku) => {
  //     const stockPrice = stockPriceMock[sku.code] || { stock: 0, price: 0 };

  //     return { code: sku.code, name: sku.name, ...stockPrice };
  //   });

  //   return { product: { ...product, skus } };
  // });

  return productsMock;
};

export const stockPriceBySKU = (sku) => {
  let result = undefined;
  const stockPrice = stockPriceMock[sku];

  if (stockPrice) {
    result = stockPrice;
  }

  return result;
};
