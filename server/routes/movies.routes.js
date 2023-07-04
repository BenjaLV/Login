import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  findMovieById,
  getAllMovies,
  getRandomMovie,
  updateMovie,
} from "../controllers/movies.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/movies", authRequired, createMovie);

router.put("/movies/:id", authRequired, updateMovie);

router.delete("/movies/id", authRequired, deleteMovie);

router.get("/movies/find/:id", authRequired, findMovieById);

router.get("/movies/random", authRequired, getRandomMovie);

router.get("/movies", authRequired, getAllMovies);
export default router;
