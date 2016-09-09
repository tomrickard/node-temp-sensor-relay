#!/bin/bash
# Assumes 64 bit Ubuntu box

# Get latest stable node for Ubuntu x64
wget https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz

# Unpack the tarball
tar -xvf node-v4.5.0-linux-x64.tar.xz

# Copy files to the correct location
cd node-v4.5.0-linux-x64
sudo cp -R * /usr/local

# Change permission settings
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

