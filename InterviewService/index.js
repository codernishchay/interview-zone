const express = require("express");
const app = express();
const Server = require("http").createServer(app); 
const dotEnv = require("dotenv");
dotEnv.config({path : "/config/config.env"});
const databaseConfiguration = require("./config/dbconfig")
const router = require("./routes/interviewRoutes");
const socketconnection = require("./controller/sockethandler");
var cors = require('cors')



app.use(cors()) //
app.use(express.json());

// socket connection handler  
socketconnection(Server); 
// database configuration 
databaseConfiguration()
    .then((e)=>console.log("Interview Service Connected To Database"))
    .catch((e)=>console.log("Interview Service Failed To Connect To Database" + e));


// router not needed to be defined here;
app.use("/",router);


const PORT = 3001 || process.env.PORT;

Server.listen(PORT);