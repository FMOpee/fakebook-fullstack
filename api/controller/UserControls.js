const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/:id", async (req,res)=>{
    try {
        User.findById(req.params.id, (error,docs)=>{
            if(error){
                console.log(error);
            }
            else res.status(200).send(docs);
        });
        // return res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;