const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//update user
// router.put("/update/:id", async (req,res)=>{
//     // if(req.body.userID == req.params.id || req.user.isAdmin){
//     //     if(req.body.password){
//     //         try {
//     //             const salt =await bcrypt.genSalt(10);
//     //             req.body.password = await bcrypt.hash(req.body.password, salt);

//     //         } catch (err) {
//     //             return res.status(400).json(err);
//     //         }
//     //     }
//         try {
//             console.log(req.body);
//             var u = {
//                 _id: req.params.id,
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName,
//                 email: req.body.email,
//                 password: req.body.password,
//                 profilePicture:req.body.profilePicture,
//                 coverPicture:req.body.coverPicture,
//                 followers:req.body.followers,
//                 following:req.body.following,
//                 isAdmin:req.body.isAdmin
//             };


//             const user = await User.findByIdAndUpdate(req.params.id, u);
//             res.status(200).send("updated");
//         } catch (error) {
//             console.log(error);
//             return res.status(400).send({error});
//         }
//     // }
//     // else
//     //     return res.status(400).send({message: "You can't edit others account"});
// });


//delete user
//get a user

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

//follow user
//unfollow user


module.exports = router;