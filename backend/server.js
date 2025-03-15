import app from "./index.js";

app.listen(process.env.PORT,()=>{
    console.log(`server Listening at port ${process.env.PORT}`)
})