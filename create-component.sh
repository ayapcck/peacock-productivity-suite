#!/bin/bash

echo What is the component called?

read component_name

echo "Is this a functional component? (y/n)"

read functional_component

echo "Is this a sub-component?"

read sub_component

# make component directory and nav to it
directory=src/components
if [ $sub_component = y ]; then
    directory=$directory/subcomponents
fi
directory=$directory/$component_name

mkdir $directory
cd $directory

# make sub-directories
mkdir test stories

# make files
touch index.js
touch test/$component_name.test.js
touch stories/$component_name.stories.js

# add content to index.js
templates=../..
component_type=Components
if [ $sub_component = y ]; then
    templates=$templates/..
    component_type=Subcomponents
fi
templates=$templates/templates

name_script="s/\$component_name/$component_name/g"

if [ $functional_component = n ]; then
    sed $name_script $templates/classComponent.txt > index.js
else 
    sed $name_script $templates/functionalComponent.txt > index.js
fi

type_script="s/\$component_type/$component_type/g"

# add content to story file
sed -e $name_script -e $type_script $templates/componentStory.txt > stories/$component_name.stories.js
