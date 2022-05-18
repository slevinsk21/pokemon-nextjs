// next
import { NextPage, GetStaticProps } from 'next'

// nextUI
import { Grid } from '@nextui-org/react'

// interfaces
import { Pokemon } from '../interfaces'

// APIs
import { pokeApi } from '../api'

// components
import { MainLayout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon'

interface Props {
	pokemons: Pokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<>
			<MainLayout title='Lista de Pokémons'>
				<Grid.Container gap={2} justify='flex-start'>
					{
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
				</Grid.Container>
			</MainLayout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const {
		data: { results },
	} = await pokeApi('pokemon?limit=151')

	const pokemons: Pokemon[] = results.map((pokemon: Pokemon, i: number) => {
		let index = i + 1
		return {
			...pokemon,
			id: index,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`,
		}
	})

	return { props: { pokemons } }
}

export default HomePage
