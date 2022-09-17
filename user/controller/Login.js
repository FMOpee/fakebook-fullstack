const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

// router.get('/', (req, res) => {
//     User.find((err, doc) => {
//         if(!err)    
//             res.send(doc);
//         else
//             console.log('Error in fetching user data: ' + JSON.stringify(err, undefined, 2));
//     });
// });

router.post("/", async (req, res) => {
    try {
        // const {error} = validate(req.body);
        
        // if(error) 
        //     return res.status(400).send({message: error.details[0].message});

        const user = await User.findOne({email: req.body.email});
        
        if(!user)
            return res.status(404).send({message: "User not found !!!"});
        
        const isValidated = await bcrypt.compare(req.body.password, user.password);
        
        if(isValidated)
            return res.status(200).send(user);
        else return res.status(400).send({message: "wrong Password or email"});
        // //generate salt and password hash for storage
        // const salt = await bcrypt.genSalt(Number(process.env.SALT));
        // const hashPassword = await bcrypt.hash(req.body.password, salt);

        // // storing user data and password hash in db
        // new User({
        //     ...req.body,
        //     password: hashPassword 
        // }).save((err, doc) => {
        //     if(err) res.status(402).send({message: "error at saving user data"});
        //     else res.status(201).send({ message: "User created successfully" });
        // });
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error !!!" });
    }
});

module.exports = router;
