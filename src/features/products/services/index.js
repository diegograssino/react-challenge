import { getFeatureFlag } from "@features/feature-flags";
import { mockProducts, mockStockPrice } from "./mock";

// @ts-ignore
const apiURL = import.meta.env.VITE_API_URL || "http://localhost:3010/api";

export async function getProducts() {
  if (getFeatureFlag("DEMO_MODE")) return mockProducts;

  try {
    const response = await fetch(`${apiURL}/products`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return { error, code: 500 };
  }
}

export async function getProduct(params) {
  if (getFeatureFlag("DEMO_MODE"))
    return mockProducts.filter((product) => product.id === params.id)[0];

  try {
    const productsResponse = await fetch(`${apiURL}/products`);
    const products = await productsResponse.json();
    const product = products.filter((product) => product.id === params.id)[0];

    if (product) {
      return product;
    }

    return { error: "Product not found", code: 404 };
  } catch (error) {
    console.error(error);
    return { error, code: 500 };
  }
}

export async function getStockPrice(params) {
  if (getFeatureFlag("DEMO_MODE")) return mockStockPrice[params.sku];

  try {
    const response = await fetch(`${apiURL}/stock-price/${params.sku}`);
    const stockPrice = await response.json();
    const data = (await stockPrice) || { error: "Data not found", code: 404 };

    return data;
  } catch (error) {
    console.error(error);
    return { error, code: 500 };
  }
}
