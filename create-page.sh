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
cat << EOT >> index.js
import React, { useState } from 'react';

const $page = () => {

	return (
		<div>
			
		</div>
	);
};

export default $page;
EOT
