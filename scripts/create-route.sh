#!/bin/bash
source ./scripts/functions.sh

with_confirmation "What is the route called?" route_name

# Navigate to routes directory
cd src/routes

# Create route directory
mkdir $route_name
cd $route_name

# Create route + test files
touch index.js $route_name.test.js

# Copy route file_template to index.js
sed "s/\$route_name/$route_name/g" ../../../scripts/file_templates/route.txt > index.js

# Copy routeTest file_template to *.test.js 
sed "s/\$component_name/$route_name/g" ../../../scripts/file_templates/routeTest.txt > $route_name.test.js
