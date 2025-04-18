require("dotenv").config();
const express = require("express");
const app = require("../server/App/app");
const PORT = process.env.PORT;
const connectDB = require("../server/Utils/db");
const bodyParser = require("body-parser");
const UserRoutes = require("../server/Routes/UserRoutes");
const AdmineRoutes = require("../server/Routes/AdmineRoutes");
const ProductRoutes = require("../server/Routes/ProductRoutes");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ContactRoutes = require("../server/Routes/ContactRoutes");
const orderRoutes = require("../server/Routes/OrderRoutes");
const paymentRoutes = require("../server/Routes/PaymentRoutes")

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}));
app.use("/api/v1/",UserRoutes);
app.use("/api/v1/",AdmineRoutes);
app.use("/api/v1/",ProductRoutes);
app.use("/api/v1/",ContactRoutes);
app.use("/api/v1/",orderRoutes);
app.use("/api/v1/",paymentRoutes)

app.listen(`${PORT}`,()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})