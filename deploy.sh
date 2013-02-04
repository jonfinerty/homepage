#!/bin/bash
repo=/home/jon/homepage
site=/home/jon/public/jonathanfinerty.com/public

echo Wiping Current Site...
rm -r $site/*

echo Deploying Homepage Site...
cp -r $repo/* $site
mkdir $site/css
sass $site/scss/main.scss $site/css/main.css

echo Cleaning up...
rm $site/apple*
rm $site/favicon.ico
rm -r $site/scss
rm $site/README.md

echo Done.

