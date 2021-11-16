import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const { data: gifs, loading } = useFetchGifs(category);

	return (
		<React.Fragment>
			<h3 className='animate__animated animate__backInLeft'>{category}</h3>

			{loading && <p className='animate__animated animate__heartBeat loading'>Loading...</p>}

			<div className='card-grid'>
				{gifs.map((gif) => (
					<GifGridItem key={gif.id} {...gif} />
				))}
			</div>
		</React.Fragment>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

export default GifGrid;
