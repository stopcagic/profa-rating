import express, { urlencoded } from 'express';
import cors from 'cors'
import connect from './db.js'
import mongo from 'mongodb'

const app = express()
const port = 3000


app.use(cors())
app.use(urlencoded({ extended: true }))

app.get('/home', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection("predavaci").find()
    let results = await cursor.toArray()


    res.json(results)
})


app.get('/predavac/:id', async (req, res) => {
    let id = req.params.id

    let db = await connect()

    let result = await db.collection("predavaci").findOne({ _id: mongo.ObjectID(id) })

    res.json(result)
})


app.get('/ocijenjeni', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection('predavaci').find({
        ocijenjen: true
    })

    let result = await cursor.toArray()

    res.json(result)
})

app.get('/tagged', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection('predavaci').find({
        tagged: true
    })

    let result = await cursor.toArray()

    res.json(result)
})

app.get('/ocijenjeni', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection('predavaci').find({
        ocijenjen: true
    })

    let result = await cursor.toArray()

    res.json(result)
})

app.post('/prijava', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    if (email && password) {
        res.json({
            stats: 'sucess;'
        })
    } else {
        res.json({
            status: 'fail'
        })
    }

})

app.post('/registracija', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    if (email && password) {
        res.json({
            stats: 'sucess;'
        })
    } else {
        res.json({
            status: 'fail'
        })
    }

})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))