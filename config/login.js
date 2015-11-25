var mongo=require('mongodb');
var Server=mongo.app;
var user=require('config/models');
     Db=mongo.Db,
     BSON=mongo.BSONpure;

var server=new Server('localhost',27017,{auto_reconnect:true});
db=new Db('findme_demodb',server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'findme_demodb' database");
        db.collection('wines', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'wines' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.login=function(email,password,callback){
console.log('Retrieving data'+email);
db.collection('routes',function(err,collection){
collection.find({'email': email},function(err,user){
if(user.length!=0)
{
if(user[0].password==password)
{
callback({'response':"Login Success",'res':true});
}
else{
callback({'response':"Invalid Password",'res':false});

}else{
callback({'response':"User does not exist",'res':false});
}
}
});
});
};
var populateDB=function()
{
var user=[
{
email: "developer.abhishek77@gmail.com",
password: "findme",
lat: "0.0",
lon: "0.0"
},
{
email: "abhishekdj1995@gmail.com",
password: "enter",
lat=0.0,
lon=0.0
}];
db.collection('routes',function(err,collection)
{
collection.insert(user,{safe:true},function(err,result){});
}







