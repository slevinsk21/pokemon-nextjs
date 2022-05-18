const getPokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const toggleFavorite = (id: number) => {
	let favorites: number[] = getPokemons()

	favorites = favorites.includes(id)
		? favorites.filter((item) => item !== id)
		: [...favorites, id]

	localStorage.setItem('favorites', JSON.stringify(favorites))
}

const isPokemonInFavorites = (id: number) => {
	if (typeof window === 'undefined') return false

	const favorites: number[] = getPokemons()

	return favorites.includes(id)
}

export default {
	toggleFavorite,
	isPokemonInFavorites,
	getPokemons
}
