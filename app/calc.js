function sum (arr) {  
  return arr.reduce(function(a, b) { 
    return a + b
  }, 0)
}
console.log('track to node hero')
module.exports.sum = sum