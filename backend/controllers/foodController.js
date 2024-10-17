import foodModel from '../models/foodModel.js';
import fs from 'fs';




// Add food items in bulk
const addFoodInBulk = async (req, res) => {
    const foodItems = req.body.foodItems; // Expecting an array of food items in the request body

    if (!foodItems || !Array.isArray(foodItems)) {
        return res.json({ success: false, message: "Invalid input, array of food items required." });
    }

    const bulkFoods = foodItems.map(item => ({
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        image: item.image // assuming image filename is passed in request body
    }));

    try {
        await foodModel.insertMany(bulkFoods); // Use MongoDB's insertMany method for bulk insert
        res.json({ success: true, message: "Food items added in bulk successfully." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error! Could not add food items in bulk." });
    }
};

//add food item

const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    });
    
    try {
        await food.save();
        res.json({success:true, message:"New Food Item Added Successfully."})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error ! New Food Item Not Added..!"})
    }
}

// all food list
const listFood = async (req, res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error to fetch food list !"})
    }
}

// remove food item

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food item removed Suuccefully."})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Food item removed Failed."})

    }
}

export {addFood, listFood, removeFood, addFoodInBulk};