const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    "name":{
        type:String,

    },
    "lastname":{
        type:String,

    },
    "birth":{
        type: String,
    },
    "mail":{
        type: String,

    },
    "reason":{
        type: String,

    }
});

module.exports = Subscriber = mongoose.model('subscriber', SubscriberSchema);