var tessel   = require('tessel');
var servolib = require('servo-pca9685');
var servo    = servolib.use(tessel.port['B']);
var servo1   = 1;

servo.on('error', function(err) {
    console.log('error', err)
})

var pickModifier = function(position) {
  if (position == 1) return function(position) { return position -= 0.2 }
  if (position == 0) return function(position) { return position += 0.2 }
}

servo.on('ready', function () {
  var position = 0;
  var modifier = pickModifier(position)

  servo.configure(servo1, 0.1, 0.9, function () {

    setInterval(function () {
      position = parseFloat(modifier(position).toFixed(1))
      console.log('Position (in range 0-1):', position)
      servo.move(servo1, position);
      if (pickModifier(position)) modifier = pickModifier(position)
    }, 100)

  });
});
