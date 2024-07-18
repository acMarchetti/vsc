function sum(a, b, callback){
    callback(a+b)
}

let cb = function(result){
    console.log("the result is "+ result)
}

console.log(sum(3,2, cb))