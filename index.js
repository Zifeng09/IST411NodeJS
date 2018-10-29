var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
res.render("login.ejs");
});

app.post("/authenticate",function(req,res){
    console.log(req.body);
    var data = {
        email:req.body.userEmail,
        password: req.body.userPassword
    }
    if(data.email == 'testuser@email.com' && data.password == 'testpassword'){
        res.render("home.ejs");
    }
    else{
        res.render("failure.ejs");
    }
});

app.listen(8000, function(){
    console.log("Serving applicaiton on port 8000");
});


// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello IST411! My name is Zifeng Xia");

// });



