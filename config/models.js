var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=mongoose.Schema({
email : String,
password: String
});
mongoose.connect('mongodb://localhost:27017/findme_demo');
module.exports=mongoose.model('user',userSchema);