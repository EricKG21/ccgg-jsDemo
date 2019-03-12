//js prototype

function A(){
    this.value = 10;
    this.getvalue = function(){
        return this.value
    };
}
var a1 = new A();
var a2 = new A();
console.log(a1.getvalue() == a2.getvalue());
console.log(a1.getvalue() === a2.getvalue());
console.log(a1.getvalue);
console.log(a2.getvalue);
console.log(a1.getvalue == a2.getvalue);

function B(){
    this.value = 20 ;
}
B.prototype.getvalue = function() {
    return this.value;
}

B.prototype.x = 20;
var b1 = new B();
var b2 = new B();

console.log(b1.getvalue == b2.getvalue);
b1.x = 30;
console.log(b1.x);
console.log(b2.x);

// _proto_ prototype
// B.prototype = new Object()
//B.prototype._proto_ = Object.prototype;

//prototype chain b1 -> B.prototype(Object) -> Object.prototype -> null
console.log(Object.getPrototypeOf(b1) === B.prototype);
console.log(Object.getPrototypeOf(B.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

// var B = new function(){}
// prototype chain : B -> Function.prototype -> Object.prototype ->null

console.log(Object.getPrototypeOf(B) === Function.prototype);
//new string()

String.prototype.reverse = function(){
    return this.split('').reverse('').join('');
};
console.log("abc".reverse());

//inheritance
//var parent = new function();
//parent.prototype = new Object();
//parent.prototype.constucturor = parent
function parent(){
    this.name = "Parent";
}
Parent.prototype.sayHello = function(){}




//p -> Parent.prototype -> Object.prototyoe -> null
var p = new Parent();
Child.prototype = p;
//c -> child.prototype = p -> parent.prototype -. Object.prototype -> null

var c = new Child();
console.log(c.name)
console.log
// c- > child.prototype 


