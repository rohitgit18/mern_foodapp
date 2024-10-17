import express from "express"
import { addToCart,removeFromcart,getCart } from "../controllers/cartControlles.js"
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromcart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;