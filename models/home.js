const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
}, {
  timestamps: true,
});

const homeSchema = new Schema({
  typeOfRealEstate: {
    type: String,
    required: true
  },
  builtYear: {
    type: Number,
  },
  price: {
    type: String,
    required: true
    }, 
  streetAddress: String,
  feature: [{ type: Schema.Types.ObjectId, ref: 'Information'}],
  city: {
    type: String,
    required: true
  },
  reviews: [reviewSchema]

}, {
  timestamps: true
});

module.exports = mongoose.model("Home", homeSchema);