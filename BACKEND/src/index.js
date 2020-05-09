import express, { urlencoded } from 'express';
import cors from 'cors'

import connect from './db.js'
import register from './routes/auth'

const app = express()
const port = 3000


app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(express.json())

app.get('/home', async (req, res) => {
    let db = await connect()

    let cursor = await db.collection("predavaci").find()
    let results = await cursor.toArray()


    res.json(results)
})

app.use('/user', register)

app.listen(port, () => console.log(`Slušam na portu ${port}!`))