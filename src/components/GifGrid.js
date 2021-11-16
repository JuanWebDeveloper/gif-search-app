import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		getGifs(category).then(setGifs);
	}, [category]);

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
