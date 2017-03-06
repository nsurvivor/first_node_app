const express=require('express')
const app=express()
const port=3000

app.get('/',(request,response)=>{
    throw new Error('Something wrong')
})

//Special Middleware with 4 params for Error/Exceptions Handling
app.use((err,request,response,next)=>{
    //log the error, for example just log it to your web console
    console.log(err)
    response.status(500).send('Something is wrong or broken! Check error!')
})

app.listen(port)