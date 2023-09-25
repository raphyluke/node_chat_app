// create a mongoose room model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Room = mongoose.model('Room', roomSchema);