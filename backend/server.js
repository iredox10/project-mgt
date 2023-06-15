import express from 'express'
import connectMongoose from './utils/connectMongoose.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import route from './routes/routes.js'


const app = express()
app.use(cors('*'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(route)
connectMongoose()

app.listen(3001, () => console.log('server connected'))