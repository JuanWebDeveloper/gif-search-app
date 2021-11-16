import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [data, setData] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((gifs) => {
			setData({
				data: gifs,
				loading: false,
			});
		});
	}, [category]);

	return data;
};
