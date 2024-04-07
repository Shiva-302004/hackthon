const mongoose = require('mongoose')
const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "doctor-name is required"]
    },
    speciality: {
        type: String,
        required: [true],

    },
    experiance: {
        type: String,
        required: [true]
    },
    qualification: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    doctorid: {
        type: Number,
        required: [true, "doctorid is required and must be unique"],
        unique: true
    },
    phoneno: {
        type: Number,
        required: [true, "Phone no of 10 digits"]
    },
    patientdetails: [
        {
            patientname: {
                type: String,
            }
        }
    ],
})
const doctor = new mongoose.model("Doctor", DoctorSchema)
module.exports = { doctor }