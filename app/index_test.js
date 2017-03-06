// app/index.js
const calc = require('./calc')

const numbersToAdd = [  
  3,
  4,
  10,
  2
]

const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)

const _ = require('lodash')

console.log(_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));





/*
syncrhonous method of doing operation in nodejs
here it is reading a file
*/
const fs_sync = require('fs')
let content
console.log('SYNCHRONOUS STYLE - Start of the file read')
try {
    //read file relative to place where npm start is initiated
  content = fs_sync.readFileSync('package.json', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)
console.log('SYNCHRONOUS STYLE - end of the file read')

/*
async style of programming - JS way
so-called error-first callbacks are in the heart of Node.js itself
*/
const fs_async = require('fs')
console.log('ASYNCHRONOUS STYLE - Start of the file read')
fs_async.readFile('package.json', 'utf-8', function (err, content) {  
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})
console.log('ASYNCHRONOUS STYLE - end of the file read')

/*
promise object is used for deferred
& asynchronous computations
*/
const fs_promise = require('fs')
console.log('PROMISES STYLE - Start of the file read')
function stats(file){
    return new Promise(function(resolve,reject){
        fs_promise.stat(file,function(error,data){
            if(error){
                return reject(error)   
            }
            resolve(data)
        })
    })
}

Promise.all([
    stats('../../javscript\ Notes.txt'),
    stats('../../nodejs_notes.txt')
])
    .then(function(data){console.log(data);})
    .catch(function(err){console.log(err)})

console.log('PROMISES STYLE - end of the file read')

