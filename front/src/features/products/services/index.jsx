// @ts-ignore
const apiURL = import.meta.env.API_URL || "http://localhost:3010/api";

export async function getProducts() {
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
  try {
    const productsResponse = await fetch(`${apiURL}/products`);
    const products = await productsResponse.json();
    const product = products.filter((product) => product.id === params.id)[0];
    const data = product || { error: "Product not found", code: 404 };

    return data;
  } catch (error) {
    console.error(error);
    return { error, code: 500 };
  }
}

export async function getStockPrice(params) {
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
