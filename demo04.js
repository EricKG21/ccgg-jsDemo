var alice = {
    "name": 'Alice'
};
// a property has three attributes : enumeralbe wirtalbe configurable// defineproperty false
alice.age = 30; // all three attributes are true
console.log(Object.keys(alice));
alice.age = 40;

Object.defineProperty(alice, "salary",{
    value : 1000,
    enumerable : true,
    writable: true
} )

console.log(Object.keys(alice));
alice.salary = 2000;
console.log(alice.salary);

//three status of an object : extensiable true, sealed , frozen.// false
var obj = {
    x : 'abc'
};

console.log('extensible: ', Object.isExtensible(obj));
Object.preventExtensions(obj);
console.log('extensible: ', Object.isExtensible(obj));

obj.y = 100;
console.log(obj.y);

console.log("sealed", Object.isSealed(obj));
Object.seal(obj);
console.log('sealed', Object.isSealed(obj));

// object is frozen means we can not update (add/delete) its property
console.log("frozen", Object.isFrozen(obj));
Object.freeze(obj);
console.log("frozen", Object.isFrozen(obj));
obj.x = 'def';
delete obj.x;
console.log(obj);


// note : all primitive types are frozen.

var s = "abc";
console.log('frozen', Object.isFrozen(s));