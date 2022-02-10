const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const recipeSchema = new Schema({
    title: {type: String, unique: true},
    level: {
      type: String,
      enum: ["Easy Peasy","Amateur Chef", "UltraPro Chef" ]},
    ingredients: [String],
    cuisine: String,
    dishType: String,
    image: {
      type: String,
       default:
        "https://images.media-allrecipes.com/images/75131.jpg"},
    duration: Number,
    creator: String,
    created: Date,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
recipeSchema.plugin(uniqueValidator);