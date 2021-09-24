const session = require('express-session');
const users = require('../models/Categoriesmodel');



exports.categories = async (req, res) => {
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
