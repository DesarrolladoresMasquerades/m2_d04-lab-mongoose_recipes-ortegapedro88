
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb+srv://${process.env.MG_USER}:${process.env.MG_PWD}@cluster0.sexab.mongodb.net/RecipiesLab?retryWrites=true&w=majority`)
  .then((x) =>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => console.error('Error connecting to mongo', err));




