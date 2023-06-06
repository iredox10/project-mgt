import mongoose from 'mongoose'

const department = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    shortName: {
        type: String,
        required: true,
        unique: true
    },
    years:[{
        type: mongoose.Types.ObjectId,
        ref: 'year'
    }]
},{timestamps: true})

const Department = mongoose.model('department', department)

export default Department