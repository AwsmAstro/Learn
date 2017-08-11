
var express = require("express");
var app = express();
//var bodyParser = require("body-parser");

//var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('Assignment'));

/*app.get('/index.htm', function(request, response){
    //response.sendFile(__dirname + '/' + 'index.htm');
});

app.post('/process_get', urlencodedParser, function(request, response){
    resp = {
        firstName: request.body.first_name,
        secondName: request.body.last_name
    };

    console.log(resp);
    response.send(JSON.stringify(resp));
});*/

var server = app.listen(8081, function(){
    var host = server.address().adress;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});


/*var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function(err, data) {
        if(err){
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            response.writeHead(202, {'Content-type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');*/