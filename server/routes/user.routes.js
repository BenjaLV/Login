import { Router } from "express";
import { updateUser } from "../controllers/users.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.put("user/:id", authRequired, updateUser);

export default router;