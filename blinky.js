// Import the interface to Tessel hardware
var tessel = require('tessel');

// Set the led pins as outputs with initial states
// Truthy initial state sets the pin high
// Falsy sets it low.
var led1 = tessel.led[1].output(0);
var led2 = tessel.led[0].output(0);
var led3 = tessel.led[3].output(0);
var led4 = tessel.led[2].output(0);

setInterval(function() { led1.toggle() }, 1000)
setTimeout(function() { setInterval(function() { led2.toggle() },1000) }, 100)
setTimeout(function() { setInterval(function() { led3.toggle() },1000) }, 200)
setTimeout(function() { setInterval(function() { led4.toggle() },1000) }, 300)

//setInterval(function () {
//    led1.toggle();
//    led2.toggle();
//    led3.toggle();
//}, 200);
