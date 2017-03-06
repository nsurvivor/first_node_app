const path=require('path')
const express=require('express')
const exphbs=require('express-handlebars')

const app=express()
const port=3000

app.engine('.hbs',exphbs({
    defaultLayout:'main',
    extname:'.hbs',
    layoutsDir:path.join(__dirname,'views/layouts')
}))

app.set('view engine','.hbs')
app.set('views',path.join(__dirname,'views'))
//app.set('views',path.join(__dirname,'views/layouts'))

app.get('/', (request, response) => {  
  response.render('home', {
    name: 'nigthcrawler'
  })
  console.log(__dirname)
  /*response.render('main', {
    name: 'nigthcrawler'
  })*/
})

app.listen(port)