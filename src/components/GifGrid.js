import React from 'react';
import PropTypes from 'prop-types';

const GifGrid = ({ category }) => {
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
	};

	getGifs();

	return (
		<div>
			<h3>{category}</h3>
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
