#!/usr/bin/env bash

apt-get update
apt-get install -y git-core
apt-get install -y emacs
apt-get install -y nodejs npm

rm -rf /var/www
ln -fs /vagrant /var/www