import billingInfoModal from "../models/billingInfo";

export const addBillingInfo = async (req, res) => {
    const { patientId, binNum, pcn, idNum, groupNum, relation, description } = req.body;

    try {
        const duplicateBillinginfo = await medicalInfoModal.findOne({ patientId });

        if (duplicateBillinginfo) return res.status(400).json({ message: "Billing info already exists" });

        const result = await billingInfoModal.create({ patientId, binNum, pcn, idNum, groupNum, relation, description });

        res.status(200).json({ result });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};