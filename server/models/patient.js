
const Patient = new mongoose.Schema(
    {
        name: { type: String, required: true },
        dob: { type: Date, required: true },
        phone: { type: String },
        address: { type: String },
        allergy: {
            name: { type: String },
            drugFamiliy: { type: String }
        },
        medicalConditions: { type: [String] },
        medications: { type: [String] },
        medList: { type: [String] }
    },
    { collection: 'patients' }
)

const model = mongoose.model('PatientData', Patient)

export default model;