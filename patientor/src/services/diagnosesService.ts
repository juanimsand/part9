import diagnosesData from '../../data/diagnoses.json';
import { Diagnoses } from '../types';

const diagnoses: Array<Diagnoses> = diagnosesData;

const getDiagnoses = (): Array<Diagnoses> => {
    return diagnoses;
};

const addDiagnose = () => {
    return null;
};

export default {
    getDiagnoses,
    addDiagnose
};