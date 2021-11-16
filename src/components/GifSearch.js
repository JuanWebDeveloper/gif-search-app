import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GifSearch = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => setInputValue(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories([inputValue]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' className='animate__animated animate__backInDown' placeholder='Búsqueda de GIF' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

GifSearch.propTypes = {
	setCategories: PropTypes.func.isRequired,
};

export default GifSearch;
