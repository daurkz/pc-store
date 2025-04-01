const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('passport-jwt');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Проверяем есть ли пользователь с подобным e-mail
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: 'This is email is exist'});

        // Хэшируем пароль.
        const hashedPassword = await bcrypt.hash(password, 10)

        // Создаем нового пользователя
        const newUser = new User({ name, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({ message: 'Add new user'})
    } catch (error) {
        res.status(500).json({ message: 'Server Error'})
    }
})

module.exports = router;