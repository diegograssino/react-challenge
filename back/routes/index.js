import { Router } from "express";
import {
  getProductsController,
  getStockPriceBySkuController,
} from "../controllers/index.js";

export const router = Router();

router.use("/api/products", getProductsController);

router.use("/api/stock-price/:sku", getStockPriceBySkuController);

export default router;
