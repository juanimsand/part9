import express = require('express');
import { calculateBmi } from './bmiCalculator';
import { excerciseCalculator } from './excerciseCalculator';
const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
    try {
        const bmi = calculateBmi(Number(_req.query.height), Number(_req.query.weight));
        res.send({
            weight: 72,
            height: 180,
            bmi: bmi
        });
    }
    catch{
        res.status(400);
        res.send({
            error: "malformatted parameters"
        });
    }
});

app.post('/exercises', (_req, res) => {
    const body = _req.body;
    if ((typeof (body.target) === 'undefined') || (typeof (body.daily_exercises) === 'undefined')) {
        res.status(400).send({
            error: "parameters missing"
        });
        return;
    }
    try {
        const exercises = excerciseCalculator(body.target, body.daily_exercises);
        res.status(200).send(exercises);
    }
    catch{
        res.status(400).send({
            error: "malformatted parameters"
        });
    }
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});