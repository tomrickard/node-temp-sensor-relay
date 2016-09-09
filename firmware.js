var SerialPort = require("serialport");
var socket = require('socket.io-client')('http://localhost');

var port = new SerialPort("/dev/ttyACM0", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline('\n')
});

port.on('open', function() {
	var interval = setInterval(function () {
		port.write('temp\n')
	}, 2000);
});

port.on('data', function (data) {
	var date = new Date()
	socket.emit(date + ' ' + data);
  console.log(date + ' ' + data);
  // port.write('hello')
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})