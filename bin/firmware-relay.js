var SerialPort = require("serialport");
var socket = require('socket.io-client')('http://localhost:3000');


// Connects the Arduino port with following settings
// Newline parser trigger 'data' event when reaching '\n'
var port = new SerialPort("/dev/ttyACM0", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline('\n')
});

// Trigged when port connection opens
port.on('open', function() {
	// Fires requests ever 2 seconds
	var interval = setInterval(function () {
		port.write('temp\n')
	}, 2000);
});


// Triggered when arduino sends data followed by '\n'
port.on('data', function (data) {
	// Creates timestamp
	var date = new Date()

	// Send data to server
	socket.emit('data', date + ' ' + data);
 	console.log('sending ' + date + ' ' + data);
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
});

// Triggered when socket is connected
socket.on('connect', function (err) {
	console.log('connected to server')
	if(err) {
		console.log(err)
	}
});

socket.on('error', function () {
	console.log('error')
});