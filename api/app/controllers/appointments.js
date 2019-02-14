const appointmentModel = require('../models/appointments');

module.exports = {
    getById: function (req, res, next) {
        const {appointmentId} = req.params;
        appointmentModel.findById(appointmentId)
            .then(response => {
                const message = response == null ? 'Appointment not found' : 'Appoint found';
                const status = response == null ? false : true;
                res.json({status, message, data: response});
            })
            .catch(err => next(err))
    },
    getAll: function (req, res, next) {
        let appointmentsList = [];
        appointmentModel.find()
            .then(appointments => {
                for (let appointment of appointments) {
                    appointmentsList.push({
                        id: appointment._id,
                        customer_name: appointment.customer_name,
                        customer_surname: appointment.customer_surname,
                        customer_email: appointment.customer_email,
                        customer_phone: appointment.customer_phone,
                        start_time: appointment.start_time,
                        distance: appointment.distance
                    });
                }
                res.json({status: true, message: "Appointments list found!", data: appointmentsList});
            })
            .catch(err => next(err))
    },
    updateById: function (req, res, next) {
        const {appointmentId} = req.params;
        const {
            customer_name,
            customer_surname,
            customer_email,
            customer_phone,
            start_time,
            distance
        } = req.body;
        appointmentModel.findByIdAndUpdate(appointmentId, {
            customer_name,
            customer_surname,
            customer_email,
            customer_phone,
            start_time,
            distance
        })
            .then(response => {
                res.json({status: true, message: "Appointment updated successfully!"});
            })
            .catch(err => next(err))
    },
    deleteById: function (req, res, next) {
        const {appointmentId} = req.params;
        appointmentModel.findByIdAndRemove(appointmentId)
            .then(response => {
                res.json({status: true, message: "Appointment deleted successfully!"});
            })
            .catch(err => next(err))
    },
    create: function (req, res, next) {
        const {
            customer_name,
            customer_surname,
            customer_email,
            customer_phone,
            start_time,
            distance
        } = req.body;
        appointmentModel.create({
            customer_name,
            customer_surname,
            customer_email,
            customer_phone,
            start_time,
            distance
        })
            .then(response => {
                res.json({status: true, message: "Appointment added successfully!"});
            })
            .catch(err => next(err))
    }
};