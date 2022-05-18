// react
import { FC } from 'react'

// nextUI
import { Grid } from '@nextui-org/react'

// compoenents
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
	pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
	return (
		<Grid.Container gap={2} direction='row' justify='flex-start'>
			{
				pokemons.map((id) => (
					<FavoriteCardPokemon key={id} pokemonId={id} />
				))
			}
		</Grid.Container>
	)
}
