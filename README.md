# Front-end Project

This project is a front-end application built with React, Vite, and ESLint. It is designed to be run locally in development mode or built for production.

The visual specification for these pages is found in the following link: [https://www.figma.com/design/x3bLoO3zPiaE06Tvtp6UaR/React-Beer-Commerce?node-id=0-1&p=f&t=sdiMcOzHnjTD0pYq-0](https://www.figma.com/design/x3bLoO3zPiaE06Tvtp6UaR/React-Beer-Commerce?node-id=0-1&p=f&t=sdiMcOzHnjTD0pYq-0)

## Requirements

Before you start, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/) (Optional)

## Installation

1. Navigate to the project directory.

   ```bash
   cd <project-folder>
   ```

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

   Now, you can set the required variables. For example, you may need to configure the API URL:

   ```env
   VITE_API_URL="localhost:3010/api"
   ```

   This will set the API endpoint that your front-end application will communicate with. You can modify this URL as per your server setup.

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev` or `yarn dev`

Runs the development server using Vite. You can open your browser at `http://localhost:5173` to see the app.

### `npm run build` or `yarn build`

Builds the project for production into the `dist` folder. This command optimizes and minifies your app for the best performance.

### `npm run preview` or `yarn preview`

Preview the production build locally after running `npm run build` or `yarn build`. This will serve the `dist` folder as a preview of the optimized version of your app.
