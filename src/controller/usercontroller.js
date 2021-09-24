const session = require('express-session');
const users = require('../models/usermodel');



exports.index = async (req, res) => {
    try {
        session = req.session;
        if (session.userid) {
            const user = session.userid;
            res.render('index', { data: user });
        } else
            res.render('index');
    } catch (e) {
        res.render('index');
    }
}

// -------------------------register code--------------------------------//
exports.register = (req, res, next) => {
    const pass = req.body.password;
    const cpass = req.body.confirm_password;
    if (pass === cpass) {
        let CustomerGroup = new users({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: pass,
        })
            .save()
            .then((data) => {
                return res.json({
                    status: true,
                    data: data,
                    message: "register  Successfully",
                });
            })
            .catch((err) => {
                return res.json({
                    status: false,
                    data: err,
                    message: "Something Went Wrong..!",
                });
                next(err);
            });
    } else {
        return res.json({
            status: false,
            message: "comfri password and password not match",
        });
    }
};


// ---------------------------------login code-------------------//
exports.login = (req, res, next) => {
    console.log(req.body.email);
    const email = req.body.email;
    const password = req.body.password;

    users.findOne( {email: req.body.email})
        .exec()
        .then((data) => {
            if (data.password === password) {
                return res.json({
                    status: true,
                    message: "Login Succesfuuly",
                    data: data,
                });
            } else {
                return res.json({
                    status: false,
                    data: { err },
                    message: "Pass Does not match..!",
                });
            }
        })
        .catch((err) => {
            return res.json({
                status: false,
                data: { err },
                message: "email add not found!",
            });
            next(err);
        });
};

//user logout function
exports.logout = async (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
















