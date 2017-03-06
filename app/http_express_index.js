const express=require('express')
const app=express()
const port=3000

app.get('/',(request,response)=>{
    response.send('HELLO FROM EXPRESS INDEX JS FILE!')
})

app.listen(port,(err)=>{
    if(err){
        console.log('error while listening port')
    }
    console.log(`Server is listening on port: ${port}`)
})