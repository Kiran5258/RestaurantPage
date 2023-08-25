const express=require('express')
const app =express()
const path=require('path')
app.set('views',path.join(__dirname))
app.set('view engine','ejs')
app.get("/",(req,res)=>{
   res.render("restaurant")
})

app.listen(3000)