#!/bin/bash

echo What is the component called?

read component_name

echo "Is this a class component? (y/n)"

read class_component

# make component directory and nav to it
mkdir src/components/$component_name
cd src/components/$component_name

# make sub-directories
mkdir test stories

# make files
touch index.js
touch test/index.test.js

# add content to index.js
if [ $class_component = y ]; then

sed "s/\$component_name/$component_name/g" ../../templates/classComponent.txt > index.js

else 

sed "s/\$component_name/$component_name/g" ../../templates/functionalComponent.txt > index.js

fi
