const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = new mongoose.Schema({
  cat: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },
  designer: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  },

  mainColor: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20
  }
});

const Category = mongoose.model("Category", categorySchema);

function validateCategory(category) {
  const schema = {
    cat: Joi.string()
      .min(3)
      .required(),
    designer: Joi.string()
      .min(3)
      .required(),
    mainColor: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(category, schema);
}

exports.categorySchema = categorySchema;
exports.Category = Category;
exports.validate = validateCategory;
