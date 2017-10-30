#!/bin/sh

param=$1

case $param in

install)
echo install... 
npm install
;;

start)
echo start... 
npm run babel-node -- src/bin/brain-games.js
;;

publish)
echo publish... 
npm publish ./
;;

esac
