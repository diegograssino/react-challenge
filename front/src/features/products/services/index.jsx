// @ts-ignore
const apiURL = import.meta.env.API_URL || "http://localhost:3010/api";

export async function getProducts() {
  try {
    const response = await fetch(`${apiURL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
