import productsMock from "../mocks/products.js";
import stockPriceMock from "../mocks/stock-price.js";

export const productsService = () => {
  const result = productsMock;
  productsMock.forEach((product) => {
    product.skus.forEach((sku) => {
      result.push({
        sku: {
          code: sku.code,
          name: sku.name,
          ...stockPriceBySKU(sku.code),
        },
      });
    });
  });

  console.log(result);

  return result;
};

export const stockPriceBySKU = (sku) => {
  let result = undefined;

  const stockPrice = stockPriceMock[sku];
  console.log(stockPrice);
  // const stockPrice = "stock-price";

  if (stockPrice) {
    result = stockPrice;
  }

  return result;
};
