import mongoose from 'mongoose'

const project = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    supervisor: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    authors:Array
    
},{timestamps: true})

const Project = mongoose.model('project', project)

export default Project