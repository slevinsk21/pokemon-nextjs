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
import { useEffect, useState } from 'react'

// utils
import { localFavorites } from '../../utils'

// styles
const styles = {
	pokemonCardHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	}
}

interface Props {
	pokemon: PokemonDetailResponse
}

export const PokemonDetailPage: NextPage<Props> = ({ pokemon }) => {
	const { id, name, sprites } = pokemon

	const [isInFavorite, setIntisFavorite] = useState(
		localFavorites.isPokemonInFavorites(id)
	)

	useEffect(() => {}, [])

	const handleToggleFavorite = () => {
		localFavorites.toggleFavorite(id)
		setIntisFavorite(!isInFavorite)
	}

	return (
		<MainLayout title={name}>
			<Grid.Container gap={2} justify='center' css={{ marginTop: '5px' }}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={sprites.other?.dream_world.front_default || 'no-imafe.png'}
								alt={name}
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
								{name}
							</Text>

							<Button
								color='gradient'
								ghost={!isInFavorite}
								onClick={handleToggleFavorite}
							>
								{!isInFavorite ? 'add' : 'remove'} favorites
							</Button>
						</Card.Header>

						<Card.Body>
							<Text size={30}>Sprites:</Text>

							<Container display='flex' direction='row'>
								<Image
									src={sprites.front_default}
									alt={name}
									width={100}
									height={100}
								/>
								<Image
									src={sprites.back_default}
									alt={name}
									width={100}
									height={100}
								/>
								<Image
									src={sprites.front_shiny}
									alt={name}
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
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string }
	const { data: pokemon } = await pokeApi(`pokemon/${id}`)

	return { props: { pokemon } }
}

export default PokemonDetailPage
