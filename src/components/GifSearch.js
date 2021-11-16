import React, { useState } from 'react';

const GifSearch = () => {
	const [inputValue, setInputValue] = useState();

	const handleInputChange = (e) => setInputValue(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submit ejecutado');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Búsqueda de GIF' value={inputValue} onChange={handleInputChange} />
		</form>
	);
};

export default GifSearch;
