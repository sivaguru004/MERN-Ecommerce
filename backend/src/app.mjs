import express from 'express';
import productRouter from "./routes/productRoutes.mjs"
import { db_connection } from './config/db.mjs';


const app = express();

app.use(express.json());

// db connection
db_connection();

// product router
app.use("/api/v1", productRouter);

export default app;