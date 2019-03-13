//js promise

function task1() {
    console.log("excuting task1")
}

function task2() {
    console.log("excuting task2")
}

function task3() {
    console.log("excuting task3")
}
function t1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            task1();
            resolve("task1 is finished")
        },500);
    })
}

function t2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            task2();
            resolve("task2 is finished");
        },1000);
    })
}

function t3(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            task3();
            resolve("task3 is finished");
        })
    })
}
var promise = t1();
promise.then(function(resp){
    console.log(resp);
    return t2();
},function(error){

}).then(function(resp){
    console.log(resp);
    return t3();
}).then(function(resp){
    console.log(resp);
}, function(error){
    console.log("error",error);
})