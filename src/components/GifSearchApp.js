import React, { useState } from 'react';

import GifSearch from './GifSearch';
import GifGrid from './GifGrid';

const GifSearchApp = () => {
	const [categories, setCategories] = useState([]);

	return (
		<div className='gif-search-app'>
			<h2 className='animate__animated animate__backInUp'>Gif Search App</h2>
			<GifSearch setCategories={setCategories} />
			<hr />

			{categories.length <= 0 ? (
				<p className='animate__animated animate__heartBeat loading'>Aun No Se Han Buscado Gifs</p>
			) : (
				categories.map((category) => <GifGrid key={category} category={category} />)
			)}
		</div>
	);
};

export default GifSearchApp;
