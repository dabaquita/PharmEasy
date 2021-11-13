import mongoose from "mongoose";

const BillingInfo = new mongoose.Schema(
    {
        patientId: { type: Number },
        binNum: { type: Number, required: true },
        pcn: { type: Number, required: true },
        idNum: { type: Number },
        groupNum: { type: Number },
        relation: { type: String },
        description: { type: String }
    },
    { collection: 'billingInfo' }
)

const model = mongoose.model('BillingData', BillingInfo)

export default model;