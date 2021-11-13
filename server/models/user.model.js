const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, reuqired: true },
        password: { type: String, required: true },
        quote: { type: String }
    },
    { collection: 'users' }
)

const model = mongoose.model('UserData', User)

module.exports = model