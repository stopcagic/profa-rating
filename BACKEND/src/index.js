import express, { urlencoded } from 'express';
import cors from 'cors'

const app = express()
const port = 3000


app.use(cors())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json('This is a homepage.')
})

app.post('/prijava', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    res.json(podaci)
})

app.post('/registracija', (req, res) => {
    let email = req.body.email
    let password = req.body.password

    res.json(podaci)
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))