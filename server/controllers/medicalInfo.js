import medicalInfoModal from "../models/medicalInfo.js";

export const addMedicalInfo = async (req, res) => {
    const { drugName, ndc, quantity, remaining, refills, prescriber, usedFor } = req.body;

    try {
        const duplicateMedicalinfo = await medicalInfoModal.findOne({ ndc });

        if (duplicateMedicalinfo) return res.status(400).json({ message: "Medical info already exists" });

        const result = await medicalInfoModal.create({ drugName, ndc, quantity, remaining, refills, prescriber, usedFor });

        res.status(200).json({ result });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};