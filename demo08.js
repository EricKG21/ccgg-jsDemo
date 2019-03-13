// closure

function outer(){
    var m = 10;
    return function(x){
        return x * m
    }
}

var inner = outer();
console.log(inner(2));

function getCounter(){
    var count = 0;
    function x(){

    }
    return {
        getCount: function(){
            return count;
        },
        setCount: function(c){
            count = c;
        },
        increase: function(){
            count++;
        },
        xxxx: x
    };
}

var myCounter = getCounter();
console.log(myCounter.getCount());
myCounter.setCount(1);
console.log(myCounter.getCount());

var myCounter1 = (function(){
    var count = 0;
    return {
        getCount: function(){
            return count;
        },
        setCount: function(c){
            count = c;
        },
        increase: function(){
            count++;
        }
    };

})();

function MyClass(){
    this.x = 100; //global
    var y = "abc";
    var getX = function(){
        console.log(this.x); // undefined
        console.log(y); // abc
    }
    getX();
    this.getY = function(){
        console.log(this.x);
        console.log(y);
    
    }
}
var MyClass = new MyClass();
MyClass.getY();

//Singleton

var MySingle = (function(){
    var instance;
    return{
        getInstance: function(){
            if(!instance){
                instance = new Object();
            }
            return instance;
        }
    }
    }
)()

var ms1 = MySingle = MySingle.getInstance();
var ms2 = MySingle = MySingle.getInstance();
console.log(ms1 === ms2);

//set time out
var myTimeout = setTimeout(function(){
    console.log("after 2 second");
},1000);
console.log(myTimeout);

console.log("after settimeout");