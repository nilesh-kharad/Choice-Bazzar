const session = require('express-session');
const users = require('../models/usermodel');
// const popup = require('popups');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.index = async (req, res) => {
    try {
        session = req.session;
        if (session.userid) {
            const user = session.userid;
            res.render('index', {data:user});
        } else
            res.render('index');
    }catch(e){        
        res.render('index');
    }
}
//create and save new user
exports.register = async (req, res) => {
    try {
        const pass = req.body.password;
        const cpass = req.body.confirm_password;
        if (pass === cpass) {
            bcrypt.hash(pass, saltRounds, function(err, hash) {
                // Store hash in your password DB.
            });
            
            
            
            // new object for new entry in the database
            const user = new users({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: pass,
            })
            //saving user to the database.
            const registerd = await user.save();
            res.status(201).redirect("index");
        } else {
            res.status(400).send("<script>alert('Can not Register')</script>");
        }
    } catch (error) {
        console.log("error is ", error);
    }
}


//existing user Login
exports.login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await users.findOne({ email })
        if (email == user.email && password == user.password) {
            let session = req.session;
            session.userid = req.body.username;
            res.send(session.username);
        }
        else {
            res.send('<script>alert ("Invalid username or password")</script>');
        }
    } catch (e) {
        console.log(e);
    }
}

//user logout function
exports.logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}