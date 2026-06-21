import express from "express";
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProduct } from "../controller/productController.mjs";

const router = express.Router();

router.route("/products").get(getAllProducts).post(createProduct)

router.route("/product/:id").get(getProductById).put(updateProduct).delete(deleteProductById)

export default router;