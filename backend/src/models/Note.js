const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tag:{
        type: String,
        require:true
    },
    title:{
        type: String,
        require:true,
    },
    message:{
        type: String,
        require:true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('note',UserSchema)