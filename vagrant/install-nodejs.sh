cd /usr/local/src
wget http://nodejs.org/dist/v0.10.29/node-v0.10.29.tar.gz
tar -xvzf node-v0.10.29.tar.gz
cd node-v0.10.29
./configure
make
sudo make install
