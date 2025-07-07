import mongoose from "mongoose"
import { Db_name }  from "../constants.js"
import express from "express"

const app = express()
const connectdb = async () => {
        try{
            const connectiontoDb = await mongoose.connect(`${process.env.MONGODB_URI}/${Db_name}`)
            console.log(`mongo db connected DB hosted: ${connectiontoDb.connection.host}`)
        }
        catch(error){
            console.log("connection failed the reasons are as follows ===>",error)
            process.exit(1)
        }
}

export default  connectdb