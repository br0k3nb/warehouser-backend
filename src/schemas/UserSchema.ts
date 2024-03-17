import mongoose from 'mongoose';

export default new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        required: false
    },
    googleAccount: {
        type: Boolean,
        required: false
    },
    settings: {
        theme: {
            type: String,
            required: false,
        }
    }
});