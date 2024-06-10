var http = require('http');
var url= require('url');
const port=8000;
 
const server=http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type':'text/html'});
    var q=url.parse(request.url,true).query;
    var txt=q.query+" "+q.month;
    response.end(txt);
})
server.listen(port,()=>{
    console.log(`server is running at ${port}`);
}); 