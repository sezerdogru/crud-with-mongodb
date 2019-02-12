const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: "Email cannot be left blank",
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: "Password cannot be left blank"
    }
});

// hash user password before saving into database
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('User', UserSchema);