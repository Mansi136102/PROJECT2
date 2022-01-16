const  express=require('express');
const app=express();
const port=process.env.PORT||936;
app.set('view engine','ejs');
//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});


})
app.listen(port,()=>{console.log("lostening to the server on http://localhost:936")});