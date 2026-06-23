import express from 'express';
import productRouter from "./routes/productRoutes.mjs"
import { db_connection } from './config/db.mjs';
import userRouter from "./routes/userRouts.mjs"


const app = express();

app.use(express.json());

// db connection
db_connection();

// product router
app.use("/api/v1", productRouter);

// user router
app.use("/api/v1", userRouter);

export default app;