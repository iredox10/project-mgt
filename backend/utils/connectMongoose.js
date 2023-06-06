import mongoose from "mongoose"

const connectMongoose = async () =>{
    try {
        mongoose.connect('mongodb://localhost/project-app')
        console.log('connect to mongo db')
    } catch (err) {
        console.log(err)
    }
}

export default connectMongoose