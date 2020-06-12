import express from 'express'
import mongo from 'mongodb'

import connect from '../db'
import verify from '../protectedRoutes'
import { formValidation } from '../validation'
import { MongoClient } from 'mongodb'

const router = express.Router()

router.post('/', verify, async (req, res) => {
    let db = await connect()

    const forma = {
        //Unjeti sve vrijednosti ali prazne.
    }

    try {
        await db.collection('forme').insertOne(forma)
        res.send(forma._id)

    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/:id', verify, async (req, res) => {
    let db = await connect()

    const id = req.params._id

    //Samo provjera dal je forma ispravno i potpuno ispunjena. (JOS NE RADI).
    const { error } = formValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const forma = {
        //Unesi sve što ide u formu.
    }

    try {
        await db.collection('forme').replaceOne({ _id: mongo.ObjectId(id) }, forma)
        res.status(200).send('success.')

    } catch (err) {
        res.status(400).send(err)
    }
})

export default router