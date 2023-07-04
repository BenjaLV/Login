import { Router } from "express";
import {
  createList,
  deleteList,
  getList,
} from "../controllers/list.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post("/lists", authRequired, createList);

router.delete("/lists/:id", authRequired, deleteList);

router.get("/lists", authRequired, getList);

export default router;
