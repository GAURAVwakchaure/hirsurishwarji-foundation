import express, { response, Router } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './route/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Form from './model/createApplication.js';
dotenv.config({path:'config.env'})
// var max1 = 0;
const app = express();

// const connectDB = require('./connection');
import connectDB from './connection.js';
connectDB();

const PORT = process.env.PORT || 8000;
// avoid cors policy error
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', route)


// mongoose.connect("mongodb://localhost:27017/gaurav", { useNewUrlParser: true }).then(() => {

    // app.listen(PORT, () => {
    //     console.log(`Database is connected and server is running successfully on ${PORT}`)
    // })


    if(process.env.NODE_ENV =="production"){
        app.use(express.static("client/build"));
        app.get("/*", function(req, res) {
            res.sendFile(path.join(__dirname, "./client/build/index.html"));
          });
    }

    app.listen(PORT, function () {
        console.log("atlas server started");
      
      });