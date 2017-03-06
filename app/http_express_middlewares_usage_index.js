const express = require('express')
const app = express()
const port=3000

//1st middleware
app.use((request,response,next)=>{
    console.log(request.headers)
    next() //go to next use() or middleware case
})

//2nd middleware
app.use((request,response,next)=>{
    //console.log(request.headers)
    request.chance=Math.random()
    next()
})

app.get('/',(request,response)=>{
    response.json({
        chance:request.chance
    })
})

app.listen(port,(err)=>{
    if(err){
        console.log('error while listening port')
    }
    console.log('working fine while listening')
})