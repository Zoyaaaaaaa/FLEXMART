const port=9000;
const express=require("express");
const app=express();
const   ExpressError=require("./ExpressError");
const checkToken=(req,res,next)=>{
    let{token}=req.query;
    if(token=="giveaccess"){
        next();
    }
    throw new ExpressError(401,"Access denied");
};
app.get("/api",checkToken,(req,res)=>{
 res.send("data");
});
app.get("/",(req,res)=>{
    res.send("hi je suis en route");
})  
app.get("/err",(req,res)=>{
   abcdef=abcdef;
})
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,("forbidden"));
})
app.use((err,req,res,next)=>{
    console.log(err,"ERROR-MIDDLEWARE!!!");
    res.send(err);
  
})
// app.use((err,req,res,next)=>{
//     console.log(err,"ERROR-MIDDLEWARE-2!!!");
//     next(err);
// })
app.listen(port,(req,res)=>{
    console.log("POST IS LITENING");
})