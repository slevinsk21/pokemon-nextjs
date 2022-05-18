const toggleFavorite = (name: string) => {
	let favorites: string[] = JSON.parse(
		localStorage.getItem('favorites') || '[]'
	)

	favorites = favorites.includes(name)
		? favorites.filter((item) => item !== name)
		: [...favorites, name]

	localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default {
	toggleFavorite,
}
