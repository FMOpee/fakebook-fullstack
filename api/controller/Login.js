const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');



router.post('/', async (req, res) => {
    try {
        

        const user = await User.findOne({email: req.body.email});
        
        if(!user)
            return res.status(404).send({message: "User not found !!!"});
        
        const isValidated = await bcrypt.compare(req.body.password, user.password);
        
        if(isValidated)
            return res.status(200).send(user);
        else return res.status(400).send({message: "wrong Password or email"});
        
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error !!!" });
    }
});

module.exports = router;
