require("dotenv/config")
require("./configs/database.config.js")
const Recipe = require('./models/Recipe.model');
const data = require('./data');
const { Model } = require("mongoose");
const { find, deleteOne } = require("./models/Recipe.model");


//Recipe.insertMany(data)

Recipe.find()
.then((data)=>{
  data.forEach(elem=>console.log(elem.title))
}).catch((error)=>console.log(error))



Recipe.findOneAndUpdate(
  {title: "Rigatoni alla Genovese"},
  { $set: { duration: 100 } },
  { new: true }
).then(data=>console.log(data))

Recipe.deleteOne({title: "Carrot Cake"})
.then((data)=> console.log("Deleted:", data))



