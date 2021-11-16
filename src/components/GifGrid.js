import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const [gifs, setGifs] = useState([]);

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=n6GLf8ytDrbg22uMfGMIn73DjIcBNPlU`;

		const response = await fetch(url);
		const { data } = await response.json();

		const gifsData = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_still.url,
			};
		});

		console.log(gifsData);
		setGifs(gifsData);
	};

	useEffect(() => {
		getGifs();
	}, []);

	return (
		<React.Fragment>
			<h3>{category}</h3>

			<div className='card-grid'>
				{gifs.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</React.Fragment>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
