import dotenv from "dotenv"
import connectdb from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path : "./env"
})
try{
    connectdb().then(() => {
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`server running on ${process.env.PORT} `);
        })
    })
}
catch(error){
    console.log("the error is ==>",error)
}
