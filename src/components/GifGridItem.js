import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
	return (
		<div className='animate__animated animate__backInRight card-item'>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifGridItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default GifGridItem;
