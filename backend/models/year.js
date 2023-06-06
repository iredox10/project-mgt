import mongoose from 'mongoose'

const year = new mongoose.Schema({
    year:{
        type: Number,
        required: true,
        unique: true
    },
    projects:[{
        type: mongoose.Types.ObjectId,
        ref: 'project'
    }]
},{timestamps: true})

const Year = mongoose.model('year', year)

export default Year