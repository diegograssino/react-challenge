# React Beer E-Commerce Backend

This is the backend server for the React Beer E-Commerce Challenge. It serves the product details and stock/price information through a REST API.

## Requirements

Before you start, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) (Optional)

## Installation

1. Navigate to the project directory.

   ```bash
   cd <project-folder>
   ```

````

2. Install the project dependencies.

   If you're using `npm`:

   ```bash
   npm install
   ```

   If you're using `yarn`:

   ```bash
   yarn install
   ```

3. Create a `.env` file based on the `.env.example` file.

   The `.env.example` file contains environment variables that you may need to adjust for your local or production setup.

   Copy the contents of `.env.example` to a new `.env` file:

   ```bash
   cp .env.example .env
   ```

   This will set up any required variables such as API configurations. One key environment variable to configure is:

   ```env
   PORT=3010
   ```

   This sets the backend server to run on port `3010`. You can change the port if necessary.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev` or `yarn dev`

Starts the backend server in development mode. The API will be available at `http://localhost:3010`.

### API Endpoints

1. **Get all products:**

   `GET /api/products`

   - Returns a list of all products with their details.

2. **Get stock and price information for a specific SKU:**

   `GET /api/stock-price/:sku`

   - Example: `GET /api/stock-price/10041`
   - Returns the stock and price information for a specific product variant identified by its SKU.
````
