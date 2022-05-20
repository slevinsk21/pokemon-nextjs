import { pokeApi } from "../api"

export const getPokemonInfo = async ( nameOrId: string ) => {

	try {

			const { data } = await pokeApi(`pokemon/${nameOrId}`)

			return  {
				id: data.id,
				name: data.name,
				sprites: data.sprites
			}

		} catch (error) {
			return null
		}
}