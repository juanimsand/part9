import patientsData from '../../data/patients.json';
import { Patients, NonSensitivePatients, NewPatient } from '../types';

const patients: Array<Patients> = patientsData;

const getPatients = (): Array<NonSensitivePatients> => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const addPatient = (entry: NewPatient): Patients => {
    const newPatientEntry = {
        id: Math.floor(Math.random() * (100000)).toString(),
        ...entry
    };
    console.log("newPatientEntry: ", newPatientEntry);
    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    addPatient
};