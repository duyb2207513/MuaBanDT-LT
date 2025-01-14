const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter=require("./app/routes/contact.route");
const ApiError=require("./app/api-error");


app.use(cors());
app.use(express.json());
app.use("/api/contacts",contactsRouter);

//handle 404 response
app.use((req,res,next)=>{
    //code o day se chay khi khong co route nao dc dinh nghia
    return next(new ApiError(404,"Resource not found"));
});
app.use((err,req,res,next)=>{
    //Middleware xy ly loi taprung
    return res.status(error.statusCode||500).json({
        message: error.message ||"Internal Server Error",
    });
});
app.get("/",(req,res)=>{
    res.json({message: "Welcomt to my app."});
});
module.exports= app;
