# Temperature Sensor Relay

Code for relaying data from an Arduino. There are two main scripts, one that assumes custom firmware is present on the Arduino and one that uses Firmata through Johnny-Five.

## Install

```
git clone https://github.com/tomrickard/node-temp-sensor-relay.git

cd node-temp-sensor-relay

npm install
```

## Using Custom Firmware: `firmware.js`

Make sure the Arduino firmware is compiled and uploaded to the Arduino. The firmware is in the *arduino-firmware folder*. The firmware requires the [Dallas Temperature Control Library](https://github.com/milesburton/Arduino-Temperature-Control-Library) and the [OneWire Library](https://github.com/PaulStoffregen/OneWire). The run the *firmware-relay* run:

```
npm run start

# Or
node bin/firmware-relay.js
```

## Helpful Scripts

If doing a fresh install on Raspberry PI/Ubuntu this script will install Node correctly: 

```
./helpers/install-node.sh
```

## Vagrant

This repository contains a Vagrant configuration file which sets up a VM with correct node environment. Use this if you want to try out the scripts without polluting your machine. The Vagrant file forwards port 3000. The start and provision the vagrant machine run the following in the root folder:

```
vagrant up
```

## License

MIT