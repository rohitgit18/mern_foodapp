import express from 'express';
import { addFood, listFood, removeFood, addFoodInBulk } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);

// Bulk food item route (no image upload for this one)
foodRouter.post("/addFoodBulk", addFoodInBulk);  // Add multiple food items in bulk

export default foodRouter;