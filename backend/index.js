import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import checkoutRouter from "./router/checkoutRouter.js";
import paymentRouter from "./router/paymentRouter.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: path.join(__dirname, "./config.env") });



const app = express();

// Updated CORS configuration to allow both production and development URLs
app.use(cors({
  origin: [process.env.FRONTEND_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1", checkoutRouter);
app.use("/api/v1/payment", paymentRouter);

dbConnection();

export default app;