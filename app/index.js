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
      name: 'nigthcrawler',
      Bikers:[
          {
              name:'night',
              type:'2W',
              dor:'2017-Mar-17',
              no:'6666'
          },
          {
              name:'crawler',
              type:'2W',
              dor:'2016-Mar-17',
              no:'6665'
          },
          {
              name:'judas',
              type:'4W',
              dor:'2013-Mar-17',
              no:'6666'
          },
          {
              name:'priest',
              type:'4W',
              dor:'2012-Mar-17',
              no:'6669'
          }
      ]
  })
  console.log(__dirname)
  /*response.render('main', {
    name: 'nigthcrawler'
  })*/
})

app.listen(port)