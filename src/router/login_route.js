const express = require('express');
const route = express.Router();
// const services = require('../render')
const usercontroller = require('../controller/usercontroller');

route.get('/', usercontroller.index);


// -------------------------------It takes you to login/Registration page-----------------------//
route.get("/login", (req, res) => {
    res.render('login');
});

route.get("/profile", (req, res) => {
    session = req.session;
    if (session.userid) {
        const user = session.userid;
        res.render('profile', { data: user })
    }
    else {
        res.send("<script>alert('You are not LoggedIn'); </script>");
    }
});

// -------------------------------Logout user -----------------------//
route.get('/logout', usercontroller.logout);
// -------------------------------Register user -----------------------//
route.post('/register', usercontroller.register);
// -------------------------------Login user -----------------------//
route.post('/login', usercontroller.login);




module.exports = route