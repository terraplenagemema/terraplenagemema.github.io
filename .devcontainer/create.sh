#!/bin/bash

set -e

DEV=/home/emamaral/dev

NODE_URL="https://nodejs.org/dist/v20.9.0/node-v20.9.0-linux-x64.tar.xz"
NODE_SUM="9033989810bf86220ae46b1381bdcdc6c83a0294869ba2ad39e1061f1e69217a"
NODE_EXT=".tar.xz"

# Prepare the dev folder.
mkdir $DEV
cd $DEV

# Install node.
wget $NODE_URL
node_file=`basename $NODE_URL`
echo "$NODE_SUM $node_file" | sha256sum --check
tar xJf $node_file
node_dir=`basename $node_file .tar.xz`
mv $node_dir node
mv $node_file node

# Set shell config.
cat <<EOF >> /home/emamaral/.bashrc
export PS1='\${debian_chroot:+(\$debian_chroot)}\[\033[01;32m\]\[\033[00m\]\[\033[01;34m\]\w\[\033[00m\] \\$ '

export LANG=en_US.UTF-8
export LANGUAGE=
export LC_CTYPE=pt_BR.UTF-8
export LC_NUMERIC=pt_BR.UTF-8
export LC_TIME=pt_BR.UTF-8
export LC_COLLATE="en_US.UTF-8"
export LC_MONETARY=pt_BR.UTF-8
export LC_MESSAGES="en_US.UTF-8"
export LC_PAPER=pt_BR.UTF-8
export LC_NAME=pt_BR.UTF-8
export LC_ADDRESS=pt_BR.UTF-8
export LC_TELEPHONE=pt_BR.UTF-8
export LC_MEASUREMENT=pt_BR.UTF-8
export LC_IDENTIFICATION=pt_BR.UTF-8
export LC_ALL=
EOF
