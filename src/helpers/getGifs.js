export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=n6GLf8ytDrbg22uMfGMIn73DjIcBNPlU`;

	const response = await fetch(url);
	const { data } = await response.json();

	const gifsData = data.map((gif) => {
		return {
			id: gif.id,
			title: gif.title,
			url: gif.images?.downsized_still.url,
		};
	});

	return gifsData;
};
