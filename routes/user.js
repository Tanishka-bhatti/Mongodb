const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
//routes
//CRUD operations for User

//view/read
router.get('/users',async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({success:false,message: err.message});
    }
})

//create
router.post('/users', async (req, res) => {
    try {
        const {name, age, weight} = req.body;
        const newUser = new User({name,age,weight});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});





module.exports = router;








//update