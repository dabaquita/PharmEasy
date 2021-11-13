import jwt from "jsonwebtoken";

import PatientModal from "../models/patient.js";

const secret = 'test';

export const addPatient = async (req, res) => {
    const { name, dob, phone, address, allergy, medicalCoditions, medications, medList } = req.body;

    try {
        const duplicatePatient = await PatientModal.findOne({ name, dob });

        if (duplicatePatient) return res.status(400).json({ message: "Patient already exists" });

        const result = await PatientModal.create({ name, dob, phone, address, allergy, medicalCoditions, medications, medList });

        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};