const {User} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Get the Users List
router.get(`/`, async (req, res) => {
    const userList = await User.find().select('-passwordHash').populate('favCategories').populate('bookmarkedItems');

    if(!userList) {
        res.status(500).json({success: false})
    }
    res.send(userList);
})

//Get a particular User
router.get(`/:id`, async (req, res) => {
    const user = await User.findById(req.params.id).select('-passwordHash').populate('favCategories').populate('bookmarkedItems');

    if(!user) {
        res.status(500).json({success: false, message: 'The user with the given ID was not found.'})
    }
    res.status(200).send(user);  
})

//Post a User
router.post(`/`, async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 007),
        isAdmin: req.body.isAdmin,
        image: req.body.image,
        language: req.body.language,
        favCategories: req.body.favCategories,
        bookmarkedItems: req.body.bookmarkedItems
    })
    user = await user.save();

    if(!user)
    return res.status(404).send('The user cannot be created.')

    res.send(user);
})

//Update a particular User
router.put('/:id',async (req, res)=> {

    const userExist = await User.findById(req.params.id);
    let newPassword
    if(req.body.password) {
        newPassword = bcrypt.hashSync(req.body.password, 10)
    } else {
        newPassword = userExist.passwordHash;
    }

    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,
            image: req.body.image,
            language: req.body.language,
            favCategories: req.body.favCategories,
            $push: {bookmarkedItems: req.body.bookmarkedItems}
        },
        { new: true}
    )

    if(!user)
    return res.status(400).send('the user cannot be created!')

    res.send(user);
})

//Login as a User
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email})
    const secretKey = process.env.SECRET_KEY;
    if(!user) {
        return res.status(400).send('The user not found');
    }

    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            secretKey,
            {expiresIn: '1d'}
        )

        res.status(200).send({user: user.email, token: token})
    } else {
        res.status(400).send('Password is incorrect.');
    }

})

//Register as a User
router.post('/register', async (req, res)=> {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 007),
        // isAdmin: req.body.isAdmin,
        image: req.body.image,
        language: req.body.language,
        favCategories: req.body.favCategories,
        bookmarkedItems: req.body.bookmarkedItems
    })
    user = await user.save();

    if(!user)
    return res.status(404).send('The user cannot be created.')

    res.send(user);
})

//Delete a particular User
router.delete('/:id', (req, res)=> {
    User.findByIdAndRemove(req.params.id).then(user => {
        if(user) {
            return res.status(200).json({success: true, message: 'The User is deleted.'})
        } else {
            return res.status(404).json({success: false, message: 'The User is not found.'})
        }
    }).catch(err=> {
        return res.status(400).json({success: false, error: err})
    })
})

//Get the count of the Users
router.get(`/get/count`, async (req, res) => {
    const userCount = await User.countDocuments()
    
    if(!userCount) {
        res.status(500).json({success: false})
    }
    res.send({
        userCount: userCount
    });
})

module.exports = router;