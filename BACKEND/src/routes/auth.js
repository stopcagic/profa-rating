import express from 'express'

import connect from '../db'
import { registerValidation, loginValidation } from '../validation'

const router = express.Router()

router.post('/register', async (req, res) => {

    let db = await connect()

    //provjerava da li je data ispravan prije nego sto se salje u bazu
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //provjerava dal isti user vec postoji
    const emailExists = await db.collection('users').findOne({ email: req.body.email })
    if (emailExists) return res.status(401).send('email already in use.')

    const user = {
        email: req.body.email,
        password: req.body.password,
        faks: req.body.faks
    }
    try {
        await db.collection('users').insertOne(user)
        res.send(user._id)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    res.send('login')
})

export default router