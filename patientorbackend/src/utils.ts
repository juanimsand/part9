/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatient, Gender } from './types';

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing weather: ' + gender);
    }
    return gender;
};

const parseString = (parameter: any): string => {
    if (!parameter || !isString(parameter)) {
        throw new Error('Incorrect or missing comment: ' + parameter);
    }

    return parameter;
}

const toNewPatient = (object: any): NewPatient => {
    const newData: NewPatient = {
        name: parseString(object.name),
        ssn: parseString(object.ssn),
        dateOfBirth: parseString(object.dateOfBirth),
        occupation: parseString(object.occupation),
        gender: parseGender(object.gender),
    }

    return newData;
}

export default toNewPatient;