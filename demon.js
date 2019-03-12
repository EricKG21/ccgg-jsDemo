// var assert = require("assert");

// assert.ok(true);
// assert.equal(1, 1);
// 
var assert = require("assert");

assert.ok(true);

assert.ok(!false);
assert.ok(!undefined);
assert.ok(!0);
assert.ok(!null);
assert.ok(!'');
assert.ok(!NaN);
assert.ok(!(NaN == NaN));
assert.ok(isNaN(NaN));


// console.log(global)
// b = 2;
function localText(){
	var a = 1;
	b = 2; //global.b
	console.log(a);
}
localText();

var globalTest = function(){

};

console.log("global b:" + global.b);

(function(){
	console.log("hello world");
})()
// Self invoke function

function avg() {
    console.log(arguments);
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result / arguments.length;
}

console.log(avg(2,4,6));

var test = function(){
    console.log("test");
}

function testWrap(x){
    if (typeof x === "function"){
        x();
    }
}

testWrap(test);