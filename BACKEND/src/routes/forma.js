import express from 'express'
import mongo from 'mongodb'

import connect from '../db'
import verify from '../protectedRoutes'


const router = express.Router()

router.post('/', verify, async (req, res) => {
    let db = await connect()

    let forma = {
        prvoPitanje: '',
        drugoPitanje: '',
        trecePitanje: '',
        cetvrtoPitanje: '',
        petoPitanje: '',
        sestoPitanje: '',
        sedmoPitanje: '',
        osmoPitanje: '',
        devetoPitanje: '',
        desetoPitanje: '',
        jedanaestoPitanje: '',
        dvanaestoPitanje: '',
        trinaestoPitanje: '',
        cetrnaestoPitanje: '',
        petnaestoPitanje: '',
        sesnaestoPitanje: '',
        sedamnaestoPitanje: '',
        osamnaestoPitanje: '',
        devetnaestoPitanje: '',
        dvadesetoPitanje: '',
        dvadesetPrvoPitanje: '',
        dvadesetDrugoPitanje: '',
        dvadesetTrecePitanje: '',
        dvadesetCetvrtoPitanje: '',
        dvadesetPetoPitanje: '',
        dvadesetSestoPitanje: '',
        dvadesetSedmoPitanje: '',
        komentar: ''
    }

    try {
        await db.collection('predavaci').update({ $push: { forma: forma } })
        res.send(forma._id)

    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/:id', verify, async (req, res) => {
    let db = await connect()

    const id = req.params._id

    let forma = req.body.forma

    try {
        await db.collection('predavaci').update({},
            { $pull: { forma: { _id: mongo.ObjectId(id) } } }, { multi: true },
            { $push: { forma: forma } })

        res.status(200).send('success.')

    } catch (err) {
        res.status(400).send(err)
    }
})

export default router