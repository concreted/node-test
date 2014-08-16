echo 'export PATH=$PATH:$HOME/node/bin' >> ~/.bashrc

cd ~

# Update with newest available as needed
wget nodejs.org/dist/v0.10.28/node-v0.10.28-linux-arm-pi.tar.gz
tar -xzvf node-v0.10.28-linux-arm-pi.tar.gz
mv node-v0.10.28-linux-arm-pi node

