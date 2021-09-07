const express = require('express');
const app = express();
const path =require("path");
require("./src/DB/conn");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const port = process.env.PORT || 3000;                 //setting port no for local host you can pick anything here
const static_path = path.join(__dirname,"./public") //getting path of this folder ("public")
app.use(express.static(static_path));


// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisisnotmysecretekry",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// cookie parser middleware
app.use(cookieParser());

//setting view engine
app.set("view engine", "ejs")
app.set('views',path.resolve(__dirname,'./views'))

app.use('/css',express.static(path.resolve(__dirname,'public/css')))
app.use('/images',express.static(path.resolve(__dirname,'public/images')))
app.use('/js',express.static(path.resolve(__dirname,'public/js')))
app.use('/fonts',express.static(path.resolve(__dirname,'public/fonts')))
app.use('/extras',express.static(path.resolve(__dirname,'public/extras')))

app.use(express.json());                 //to get data from pure json format from body or the postman
app.use(express.urlencoded({extended:false}));
//load routers
app.use('/',require('./src/router/login_route'));


app.listen(port,()=>{
    console.log(`Server is running at port http://localhost:${port}`);
});
