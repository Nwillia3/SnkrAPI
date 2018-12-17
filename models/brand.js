const mongoose = require("mongoose");
const Joi = require("joi");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  tech: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  releaseDate: {
    type: Date,
    default: Date.now()
  },
  colorWay: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  }
});

const Brand = mongoose.model("Brand", brandSchema);

function validateBrand(brand) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required(),
    tech: Joi.string()
      .min(3)
      .required(),
    releaseDate: Joi.string().min(3),
    colorWay: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(brand, schema);
}

exports.brandSchema = brandSchema;
exports.Brand = Brand;
exports.validate = validateBrand;
