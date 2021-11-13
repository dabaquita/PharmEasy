import mongoose from "mongoose";

const MedicalInfo = new mongoose.Schema(
    {
        drugName: { type: Number },
        ndc: { type: Number },
        quantity: { type: Number },
        remaining: { type: Number },
        refills: { type: Number },
        prescriber: { type: String },
        usedFor: { type: String }
    },
    { collection: 'medicalInfo' }
)

const model = mongoose.model('BillingData', BillingInfo)

export default model;