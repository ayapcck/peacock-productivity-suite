#!/bin/bash
source ./scripts/functions.sh

echo "What is the route called?"

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
touch test/$page.test.js

# add content to index.js
sed "s/\$page/$page/g" ../../templates/page.txt > index.js

sed "s/\$component_name/$page/g" ../../templates/componentTest.txt > test/$page.test.js
