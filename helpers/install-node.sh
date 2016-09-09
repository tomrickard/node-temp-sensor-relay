#!/bin/bash
# installs NodeJS (which includes NPM) on Ubuntu 32/64 bit and Raspberry Pi arm6/arm7

# Move to download folder
cd /home/$(whoami)/Downloads

# Get latest stable node for Ubuntu x64
if [ $(uname -m) = "x86_64" ]; then
   wget https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz
fi

if [ $(uname -m) = "i686" ]; then
   https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x86.tar.xz
fi

if [ $(uname -m) = "armv6l" ]; then
   https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv6l.tar.xz
fi

if [ $(uname -m) = "armv7l" ]; then
   https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv6l.tar.xz
fi


# Unpack the tarball
tar -xvf node-v4.5.0-linux-x64.tar.xz

# Copy files to the correct location
cd node-v4.5.0-linux-x64
sudo cp -R * /usr/local

# Change permission settings
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}