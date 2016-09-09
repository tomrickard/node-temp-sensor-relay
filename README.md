# Temperature Sensor Relay

Scripts designed to relay data from an Arduino. The scripts are designed to run both on a Raspberry Pi and standard x86 architecture. There are two main scripts, one that assumes custom firmware is present on the Arduino and one that uses Firmata through Johnny-Five.

## Using Custom Firmware: `temp-sensor-fireware.js`


## Using Firmata: `temp-sensor-johnny-five.js`

## Usage

If using a fresh installation on Raspberry PI/Ubuntu this helper will install Node correctly: 

```
./install-node.sh
```

```
# Get the code
git clone https://github.com/tomrickard/node-temp-sensor-relay.git
cd node-temp-sensor-relay

# Install dependencies
npm install

# Run relay
npm run start

# Run on startup
./run-on-startup.sh
```


## Vagrant

This repository contains a Vagrant configuration file which sets up a VM with correct node environment. use this if you want to try out the scripts without polluting your machine.