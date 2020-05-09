import express from 'express'

import connect from '../db'
import verify from './protectedRoutes'

const router = express.Router()

router.get('/predavaci', verify, async (req, res) => {
    let db = await connect()

    let cursor = await db.collection("predavaci").find()
    let results = await cursor.toArray()


    res.json(results)
})

export default router