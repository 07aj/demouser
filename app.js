/**  
 * Module dependencies.  
 */ 
var express  = require('express'); 
var connect = require('connect'); 
var app      = express(); 
  
// Configuration 
app.use(express.static(__dirname + '/public')); 
app.use(connect.logger('dev')); 
app.use(connect.json()); 
app.use(connect.urlencoded());  
// Routes  

require('./routes/routes.js')(app);  

app.listen(3000);  

console.log('The App runs on port ' + 3000);
