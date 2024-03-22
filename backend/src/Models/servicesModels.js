const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name: { type: String, trim: true },
    email: { type: String, trim: true },
    phoneNumber: { type: Number },
    domain: { type: String },
    resume: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("service", serviceSchema);