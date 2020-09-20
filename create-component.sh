#!/bin/bash

echo What is the component called?

read component_name

echo "Is this a functional component? (y/n)"

read functional_component

# make component directory and nav to it
mkdir src/components/$component_name
cd src/components/$component_name

# make sub-directories
mkdir test stories

# make files
touch index.js
touch test/$component_name.test.js
touch stories/$component_name.stories.js

# add content to index.js
if [ $functional_component = n ]; then

sed "s/\$component_name/$component_name/g" ../../templates/classComponent.txt > index.js

else 

sed "s/\$component_name/$component_name/g" ../../templates/functionalComponent.txt > index.js

fi

# add content to story file
sed "s/\$component_name/$component_name/g" ../../templates/componentStory.txt > stories/$component_name.stories.js
