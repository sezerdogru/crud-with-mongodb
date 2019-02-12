const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    create: function (req, res, next) {
        const {email, password} = req.body;
        userModel.create({
            email,
            password
        })
            .then(response => {
                res.json({status: true, message: "User added successfully!"});
            })
            .catch(err => next(err))
    },
    authenticate: function (req, res, next) {
        const {email, password} = req.body;
        userModel.findOne({email})
            .then(response => {
                if (bcrypt.compareSync(password, response.password)) {
                    const token = jwt.sign({id: response._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json({status: true, message: "User found!", data: {user: response, token: token}});
                } else {
                    res.json({status: "error", message: "Invalid email/password!"});
                }
            })
            .catch(err => next(err))
    }
};