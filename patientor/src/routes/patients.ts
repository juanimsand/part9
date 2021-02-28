import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatient from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getPatients());
})

router.get('/:id', (_req, res) => {
    res.json(patientsService.getOnePatient(_req.params.id));
})

router.post('/', (_req, res) => {
    try {
        const newPatient = toNewPatient(_req.body);

        const addedPatient = patientsService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (e) {
        res.status(400).send(e.message);
    }
})


export default router;