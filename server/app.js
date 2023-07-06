import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

//Routes modules
import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js";

//Initializations
const app = express();

//Middlewares
app.use(
  cors({
    origin: " http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", AuthRoutes);
app.use("/api/user", UserRoutes);
// app.use("/api", FavoritesRoutes);



export default app;
