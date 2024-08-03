//Require the http module
var http=require("http");
//Require the custom module
var dt=require("./myModule");
//Create an HTTP server
http.createServer(function(req,res){
    //Set the responce Header
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("The date and time is currently:"+dt.myDateTime());
    res.end();
}).listen(8000);
