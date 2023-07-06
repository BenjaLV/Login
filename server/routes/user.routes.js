import { Router } from "express";
import { addToLikedMovies, getLikedMovies, removeFromLikedMovies} from '../controllers/users.controllers.js'

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/liked/:email", getLikedMovies);

router.post("/add", addToLikedMovies);

router.put("/remove", removeFromLikedMovies);

export default router;
