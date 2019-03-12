// this

// constructor function

function Vehicle(){
    this.price = 1000; // global price after invoke function  = 1000
    price2 = 2000;
}

var v = new Vehicle();
console.log(v);
console.log('after new' , global.price);
console.log('after new', price2);

var u = Vehicle();
console.log(u);
console.log('function invoke', global.price)

// safe constructor
function Person(name){
    if(!(this instanceof Person)){  //?
        return new Person(name);
    }
    this.name = name;
}
console.log(Person('bob'));

var bob = {
    name : 'bob',
    hello : function(a,b){
        return 'hello' +this.name
    }

};

console.log(bob.hello());
var myHello = bob.hello;
console.log(myHello(1,2)); //?


