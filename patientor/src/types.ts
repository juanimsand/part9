// eslint-disable-next-line @typescript-eslint/no-empty-interface

export interface Entry {
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export interface Diagnoses {
    code: string;
    name: string;
    latin?: string;
}

export interface Patients {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
    entries: Entry[];
}

export type NonSensitivePatients = Omit<Patients, "ssn" | "entries">;

export type NewPatient = Omit<Patients, "id">;

export type PublicPatient = Omit<Patients, 'ssn' | 'entries'>