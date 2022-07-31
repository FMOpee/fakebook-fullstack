const router = require("express").Router();
const Post = require("../models/Post");

//create Post
router.post("/", async (req,res)=>{
    const post = new Post(req.body);
    try {
        const saved = await post.save();
        res.status(200).send(saved);
    } catch (error) {
        res.status(400).send(error);
    }
});

//get all post
router.get('/', (req, res) => {
    Post.find((err, doc) => {
        if(!err)    
            res.send(doc);
        else
            console.log('Error in fetching post data: ' + JSON.stringify(err, undefined, 2));
    });
});


// //Like Post
// router.put("/:id",async (req,res)=>{
//     let post = {};
//     try{
//         Post.findById(req.params.id, (err,docs)=>{
//             if(err){
//                 console.log(err);
//             }
//             else {
//                 post = docs;
//                 console.log(post.likeArray);
//                 post.likeArray.push("62dc9277f25240da08eb331a");
//                 console.log(post.likeArray);


//                 try {
//                     Post.replaceOne(
//                         { _id: post._id },
//                         { likeArray: post.likeArray }
//                     );
//                 } catch (error) {
//                     console.log(error);
//                 }
                


//                 res.status(200).send(docs);
//             }
//         });
//     }
//     catch(err){
//         console.log(err);
//     }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     // try {
//     //     const post = Post.findOne({_id: req.params.id});
//     //         console.log(req.params.id);
//     //         console.log(res.data);
//     //         const {userID} = req.body;
//     //         console.log(userID);
//     //         // if(res.data.likeArray.includes(userID)){
//     //         //     console.log("unliked");
//     //         // }
//     //         // else{
//     //         //     console.log("liked");
//     //         // }
        
        



//     //     // const {uid} = req.body;

//     //     // if(post.likes.includes(req.body.userID)){
//     //     //     await post.updateOne({$pull:{likes: {uid}}});
//     //     //     console.log("unliked");
//     //     //     return res.status(200).send(post);

//     //     // }
//     //     // else{
//     //     //     await post.updateOne({$push:{likes: {uid}}});
//     //     //     console.log("liked");
//     //     //     return res.status(200).send(post);
//     //     // }

//     // } catch (error) {
//     //     return res.status(400).send(error);
//     // }
// });



module.exports = router;