import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true 
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    favourite: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true 
});

export default mongoose.model('Book', bookSchema); 