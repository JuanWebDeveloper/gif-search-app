import React, { useState } from 'react';

import GifSearch from './GifSearch';
import GifGrid from './GifGrid';

const GifSearchApp = () => {
	const [categories, setCategories] = useState(['Naruto']);

	return (
		<div className='gif-search-app'>
			<h2>Gif Search App</h2>
			<GifSearch setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</div>
	);
};

export default GifSearchApp;
