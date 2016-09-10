var config = require('../relay-config');
var SerialPort = require("serialport");
var socket = require('socket.io-client')(config.serverUrl);


// Connects the Arduino port with following settings
// Newline parser trigger 'data' event when reaching '\n'
var port = new SerialPort(config.arduinoPort, {
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
	var d = new Date()
	var date = [d.getFullYear() , d.getMonth()+1, d.getDate()].join('-');
	var time = [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
	var mysql_datetime = date + ' ' + time;

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