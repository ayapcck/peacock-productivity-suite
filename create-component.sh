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

cat << EOT >> index.js
import React, { Component } from 'react';
import styled from 'styled-components';

export default class $component_name extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
    }
}
EOT

else 

cat << EOT >> index.js
import React from 'react';
import styled from 'styled-components';

const $component_name = () => (
    <div></div>
);

export default $component_name;
EOT

fi
