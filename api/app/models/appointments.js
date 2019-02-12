const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    customer_name: {
        type: String,
        trim: true,
        required: "Customer name cannot be left blank"
    },
    customer_surname: {
        type: String,
        trim: true,
        required: "Customer surname cannot be left blank"
    },
    customer_email: {
        type: String,
        trim: true,
        required: "Customer email cannot be left blank"
    },
    customer_phone: {
        type: [Number,"Phone must be number"],
        trim: true,
        required: "Customer phone cannot be left blank"
    },
    start_time: {
        type: Date,
        trim: true,
        required: "Start time cannot be left blank"
    },
    distance: {
        type: Number,
        trim: true,
        required: "Distance cannot be left blank"
    }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);