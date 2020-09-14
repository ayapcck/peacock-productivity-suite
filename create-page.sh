echo What is the page called?

read page_name

cd src/pages

# create directories
mkdir $page_name
cd $page_name
mkdir stories test

# create JavaScript files for page
touch index.js
touch test/index.test.js

# add content to index.js
cat << EOT >> index.js
import React, { useState } from 'react';

const TestPage = () => {

	return (
		<div>
			
		</div>
	);
};

export default TestPage;
EOT
