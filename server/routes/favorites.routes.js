import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import {getFavorites, addToFavorites, deleteFromFavorites} from '../controllers/favotites.controllers.js'

const router = Router();

router.get('/favorites', authRequired, getFavorites)

router.post('/favorites', authRequired, addToFavorites)

router.delete('/favorites', authRequired, deleteFromFavorites)