import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Routes modules
import AuthRoutes from "./routes/auth.routes.js";

//Initializations
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", AuthRoutes);

export default app;
