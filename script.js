/* Напишіть функцію CoffeeMake, 
яка буде мати в прототипах 2 методи: on(),off().
Далі напишіть ще 3 функції: капельна, ріжкова, каво-машина, 
які будуть наслідувати базовий функціонал CoffeeMake, 
а також мати власний.  */

function CoffeeMake(coffee){
    this.coffee = coffee
};
CoffeeMake.prototype.on = function(){
    console.log(`CoffeeMake::ON`)
};
CoffeeMake.prototype.off = function(){
    console.log(`CoffeeMake::OFF`)
};    
  
let kava = new CoffeeMake('arabica');
kava.on();
kava.off();


function CoffeeMachine (coffee){
    this.coffee = coffee
};
CoffeeMachine.prototype = CoffeeMake.prototype;
CoffeeMachine.prototype.makeCoffe = function(){
    console.log(`Make coffe`)
};
let machine = new CoffeeMachine();
machine.on();
machine.makeCoffe();
machine.off();


function DripCoffeeMaker(coffee){
    this.coffee = coffee
};
DripCoffeeMaker.prototype = CoffeeMachine.prototype;
DripCoffeeMaker.prototype.cupCount = function(){
    console.log(`DripCoffeeMaker::cup of coffee`)
    // set count of cup coffee
};
DripCoffeeMaker.prototype.autoShutOff = function(){
    console.log(`DripCoffeeMaker::Auto shut-off Timer`)
    // set timer auto turn-off
};

let dripkava = new DripCoffeeMaker('a');
dripkava.on();
dripkava.cupCount();
dripkava.makeCoffe();
dripkava.autoShutOff();
dripkava.off();



function EspressoCoffeeMaker(coffee){
    this.coffee = coffee
};
EspressoCoffeeMaker.prototype = CoffeeMachine.prototype;
EspressoCoffeeMaker.prototype.typeCoffee = function(){
    console.log(`EspressoCoffeeMaker:: select type of coffee `)
    // set count of cup coffee
};

let espressokava = new EspressoCoffeeMaker('b');
espressokava.on();
espressokava.typeCoffee();
espressokava.makeCoffe();
espressokava.off();