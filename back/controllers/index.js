import { productsService, stockPriceBySKU } from "../services/index.js";

export const getProductsController = (req, res) => {
  try {
    const result = productsService();

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getStockPriceBySkuController = (req, res) => {
  try {
    const { sku } = req.params;
    const result = stockPriceBySKU(sku);

    if (result) {
      res.status(200).send(result);
    }

    res.status(404).send({
      errors: [
        {
          id: sku,
          status: 404,
          code: "not-found",
          title: "Product Not Found",
          detail: `Product ${sku} is not available on this server`,
        },
      ],
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
