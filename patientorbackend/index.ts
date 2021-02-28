import express from 'express';
import diagnosesRouter from './src/routes/diagnoses';
import patientsRouter from './src/routes/patients';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('pong');
    return;
});

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientsRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});