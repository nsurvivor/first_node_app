//content of http index
const http = require('http');
const port = 3000;

const requestHandler = (request,response) => {
	console.log(request.url)
	console.log('Hello Node js server')
} 

const httpServer = http.createServer(requestHandler)

httpServer.listen(port,(err)=>{
	if(err){
		return console.log('ERROR:something bad happened',err)
	}
	console.log(`Server listening on ${port}`)
})