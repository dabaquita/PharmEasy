import PatientModal from "../models/patient.js";

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

export const deletePatient = async (req, res) => {
    const { name, dob } = req.body;

    try {
        const findPatient = await PatientModal.findOne({ name, dob });

        if (!duplicatePatient) return res.status(400).json({ message: "Patient does not exists" });

        const result = await PatientModal.deleteOne({ name, dob });

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};