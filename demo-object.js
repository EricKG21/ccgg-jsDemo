var  assert = require('assert');

var alice = {
    name : 'alice',
    age : 20,
    hello : function (){
        return 'HELLO,' + this.name;
    }
    

};

var keys = Object.keys(alice);
console.log(keys)