import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [data, setData] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		setTimeout(() => {
			getGifs(category).then((gifs) => {
				setData({
					data: gifs,
					loading: false,
				});
			});
		}, 8000);
	}, [category]);

	return data;
};
