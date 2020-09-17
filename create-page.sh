#!/bin/bash

echo What is the page called?

read page_name

page_suffix="Page"
page=$page_name$page_suffix

cd src/pages

# create directories
mkdir $page
cd $page
mkdir stories test

# create JavaScript files for page
touch index.js
touch test/index.test.js

# add content to index.js
sed "s/\$page/$page/g" ../../templates/page.txt > index.js
