const express=require("express")
const cors=require("cors")
const product=require("./routes/productroute")
const user=require("../backend/routes/user")
const error=require("../backend/middleware/error")
const cookie_parser=require("cookie-parser")
const order=require("../backend/routes/orderroute")
const member=require("./routes/membersroute")
const patient = require("../backend/routes/patientroute")
const doctors = require("../backend/routes/doctorsroute")
const app=express()
app.use("cors")
app.use(express.json())
app.use(cookie_parser())
app.use("/app",product)
app.use("/app",user)
app.use("/app",order)
app.use("/app",member)
app.use("/app",patient)
app.use("/app",doctors)

app.use(error)
module.exports=app
