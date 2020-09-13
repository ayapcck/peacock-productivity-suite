echo What is the component called?

read component_name

# make component directory and nav to it
mkdir src/components/$component_name
cd src/components/$component_name

# make sub-directories
mkdir test stories

# make files
touch index.js
touch test/index.test.js

