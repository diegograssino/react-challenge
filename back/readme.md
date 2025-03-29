# React Beer E-Commerce Backend

This is the backend server for the React Beer E-Commerce Challenge. It serves the product details and stock/price information through a REST API.

## API Endpoints

1. **Get all products:**

   `GET /api/products`

   - Returns a list of all products with their details.

2. **Get stock and price information for a specific SKU:**

   `GET /api/stock-price/:sku`

   - Example: `GET /api/stock-price/10041`
   - Returns the stock and price information for a specific product variant identified by its SKU.

## Running the Server

1. Clone the repository.
2. Navigate to the backend folder.
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`
5. The API will be available at `http://localhost:3010`.
