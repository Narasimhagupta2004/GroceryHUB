const mongoose = require('mongoose');

const LoginAttemptSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    ipAddress: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('LoginAttempt', LoginAttemptSchema);
