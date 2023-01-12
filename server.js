var http=require('http'); //importing some funcnality we need

function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write("Hello World!");
    response.end();
}

http.createServer(onRequest).listen(8000);