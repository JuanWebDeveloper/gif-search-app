import React, { useState } from 'react';

import GifSearch from './GifSearch';

const GifSearchApp = () => {
	const [categories, setCategories] = useState(['Naruto', 'One Pice', 'Dragon Ball']);

	return (
		<div className='gif-search-app'>
			<h2>Gif Search App</h2>
			<GifSearch />
			<hr />

			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</div>
	);
};

export default GifSearchApp;
