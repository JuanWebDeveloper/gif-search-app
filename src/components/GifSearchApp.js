import React, { useState } from 'react';

import GifSearch from './GifSearch';
import GifGrid from './GifGrid';

const GifSearchApp = () => {
	const [categories, setCategories] = useState(['Naruto']);

	return (
		<div className='gif-search-app'>
			<h2 className='animate__animated animate__backInUp'>Gif Search App</h2>
			<GifSearch setCategories={setCategories} />
			<hr />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</div>
	);
};

export default GifSearchApp;
