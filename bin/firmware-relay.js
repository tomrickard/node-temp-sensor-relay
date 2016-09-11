var config = require('../relay-config');
var SerialPort = require("serialport");
var socket = require('socket.io-client')(config.serverUrl);
var fs = require('fs')


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
	}, 10000);
});


// Triggered when arduino sends data followed by '\n'
port.on('data', function (temp) {
	
	// Get datetime for local time in ISO8601
	// Data is stored at GMT on server
	// When conerted back to Date object in browser will be correct.
	// Always Send ISO8601 to server!
	var mysql_datetime = new Date().toISOString();

	// Send data to server
	socket.emit('temp', {date: mysql_datetime, temperature: temp});
 	console.log('sending ' + mysql_datetime + ' ' + temp);

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