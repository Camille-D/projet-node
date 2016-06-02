// var http = require('http'),
//  fs = require('fs');

// http.createServer(function(req, res) {
  
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//     'Access-Control-Allow-Origin' : '*'
// });

// var readStream = fs.createReadStream(__dirname + '/index.html');//va dans l'aboresecence et tu nosu renvoie le fichier


//  readStream.pipe(res);
// }).listen(1337);

// console.log('Visit me at http://localhost:1337');

var express = require('express');
 var app  = express();
 var path = require('path');

 app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/index.html'));
 });

 app.listen(1337); // sorry

 //créer une instance de route pour admin routeur 
 var adminRouter = express.Router();

adminRouter.get('/', function(req, res){// pour lui dire ou aller 
	res.send('Hello');
}); 

adminRouter.get('/users', function(req, res){
	res.send('users');
});

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!');
 });

app.use('/admin', adminRouter); // methode d'express utilise l'url que je t'ai donné et aplique lui la méthode que je t'ai donné (rappel toutes les routes);

 console.log('1337 is the magic port!');


