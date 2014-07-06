#!/usr/bin/env bash

apt-get update
apt-get install -y git-core
apt-get install -y emacs
#apt-get install -y nodejs npm
apt-get install -y make g++

# Install MongoDB from official repo
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
apt-get update
apt-get install -y mongodb-org

rm -rf /var/www
ln -fs /vagrant /var/www