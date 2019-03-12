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


//function apply call bind.

console.log(myHello.apply(bob, [1,2]));
console.log(myHello.call(bob,1,2));
console.log(myHello.bind(bob)(1,2));

(function(){
    var order = {
        price: 100,
        calculate: function() {
            var that = this;
            return {
                name: "table",
                getTotalPrice: function(qty){
                    return qty * that.price
                }
            };
        },
        calculate2: function(){
            return{
                name: "table",
                getTotalPrice: function(qty){
                    return qty * this.price;
                }
            };
        }
    };
    var calc = order.calculate();
    console.log(calc);
    console.log(calc.name);
    console.log(calc.getTotalPrice(1));
    var calc2 = order.calculate2();
    console.log(calc2.getTotalPrice.call(order,1));
    console.log(calc2.getTotalPrice.apply(order,[1]));
    console.log(calc2.getTotalPrice.bind((order),(1)));


})()

function check(price, qty, member) {
    var result = price * qty;
    switch(member){
        case "vip": 
            result *=0.7;
            break;
        case "premiun":
            result *=0.6;
            break;
        default:
            break;
    }
    return result;
}

console.log(check(100,5,"vip"));

// open-close principal 

function checkout2(price, qyt, type){
    this[type] = this[type] || 1;
    return price * qty * this[type];
}
var 


