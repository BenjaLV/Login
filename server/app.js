import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//Routes modules
import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js"
import MovieRoutes from './routes/movies.routes.js'
import ListRoutes from './routes/lists.routes.js'
//Initializations
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", AuthRoutes);
app.use("/api", UserRoutes);
app.use("/api", MovieRoutes);
app.use("/api", ListRoutes);


export default app;
