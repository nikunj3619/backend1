const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://gaikwadnikunj2003:Nikunj123@cluster0.xwqh0py.mongodb.net/birthday?retryWrites=true&w=majority&appName=Cluster0");

const totalSchema = mongoose.Schema({
    number : Number
})

module.exports = mongoose.model("totalModel", totalSchema);