import { pokeApi } from "../api"

export const getPokemonInfo = async ( nameOrId: string ) => {

	const { data } = await pokeApi(`pokemon/${nameOrId}`)
	return  {
		id: data.id,
		name: data.name,
		sprites: data.sprites
	}
}