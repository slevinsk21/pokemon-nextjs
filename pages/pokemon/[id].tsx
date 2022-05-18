// react

// next
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

// nextUI
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react'

// interfaces
import { PokemonDetailResponse } from '../../interfaces'

// APIs
import { pokeApi } from '../../api'

// components
import { MainLayout } from '../../components/layouts'
import { useEffect } from 'react'

// utils
import { localFavorites } from '../../utils'

// styles
const styles = {
	pokemonCardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
}

interface Props {
	pokemon: PokemonDetailResponse
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	console.log('oute of useEffect')

	useEffect(() => {
		console.log(localStorage.getItem('favorites'))
	}, [])

	const handleToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.name)
	}

	return (
		<MainLayout title={pokemon.name}>
			<Grid.Container gap={2} justify='center' css={{ marginTop: '5px' }}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'no-imafe.png'
								}
								alt={pokemon.name}
								width={'100%'}
								height={'auto'}
							/>
						</Card.Body>
					</Card>
				</Grid>

				<Grid xs={12} sm={8}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Header css={styles.pokemonCardHeader}>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>

							<Button color='gradient' ghost onClick={handleToggleFavorite}>
								favorites
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>Sprites:</Text>

							<Container display='flex' direction='row'>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</MainLayout>
	)
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const paramList = Array(151)
		.fill(0)
		.map((_, i) => `${i + 1}`)

	return {
		paths: paramList.map((id) => ({ params: { id } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string }
	const { data: pokemon } = await pokeApi(`pokemon/${id}`)

	return { props: { pokemon } }
}

export default PokemonPage
