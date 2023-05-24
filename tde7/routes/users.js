const express = require('express');
const { createUser, getAllUsers, findUserByEmail, findUserById } = require('../database/users');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const router = express.Router()

router.get("/user", async (req, res) => {
    const users = await getAllUsers();
    res.json({
        users
    })
})

router.post("/register", async (req, res) => {
    try {
        const isEmailVerify = await findUserByEmail(req.body.email);
        if (isEmailVerify) {
            return res.status(400).json({
                message: "Email já cadastrado"
            })
        }
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        }
        const createdUser = await createUser(newUser)
        delete createdUser.password;
        res.status(201).json({
            user: createdUser,
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
})


router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await findUserByEmail(email);
    const isSamePassword = bcrypt.compareSync(password, user.password);

    if (!user) {
        return res.status(401).send();
    }


    if (!isSamePassword) {
        return res.status(401).send()
    }

    const token = jwt.sign({
        userId: user.id,
        name: user.name,
    }, process.env.SECRET);

    res.json({
        sucess: true,
        token
    });
})

router.get("/profile", auth, async (req, res) => {
    const user = await findUserById(req.user.userId);
    res.json({
        user
    })
})


module.exports = {
    router
}