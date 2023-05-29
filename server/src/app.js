const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const router_path = require("./router");
require("./db/conn")
require("./model/register")
require("./model/subscribe")

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router_path);

app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})