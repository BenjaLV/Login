import { Router } from "express";
import { deleteUser, updateUser } from "../controllers/users.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.put("/user/:id", authRequired, updateUser);

router.delete("/user/:id", authRequired, deleteUser);

export default router;
