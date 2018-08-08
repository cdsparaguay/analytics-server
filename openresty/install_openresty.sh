#!/bin/bash
# import our GPG key:
apt-get update
apt-get install -y wget
wget -qO - https://openresty.org/package/pubkey.gpg | apt-key add -

# for installing the add-apt-repository command
# (you can remove this package and its dependencies later):
apt-get install -y software-properties-common

# add the our official APT repository:
DEBIAN_VERSION=$(lsb_release -sc)
DEBIAN_VERSION=jessie	
add-apt-repository -y "deb http://openresty.org/package/debian $DEBIAN_VERSION openresty"

# to update the APT index:
apt-get update
apt-get install -y --allow-unauthenticated openresty

