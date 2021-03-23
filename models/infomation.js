const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const informationSchema = new Schema({
    feature: {
        type: String,
        required: true,
        unique: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Information', informationSchema);