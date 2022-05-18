// react
import { FC } from 'react'

// next
import { useRouter } from 'next/router'

// nextUI
import { Grid, Card, Row, Text, Spacer } from '@nextui-org/react'

// interfaces
import { Pokemon } from '../../interfaces'

interface Props {
	pokemon: Pokemon
}

const styles = {
	PokemonCard: {
		with: '100%',
		maxWidth: '340px'
	},
	pokemonBadge: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#333',
		fontSize: '12px',
		fontWeight: 700,
		background: 'aquamarine',
		borderRadius: '100%',
		maxHeight: '38px',
		maxWidth: '38px',
		padding: '12px'
	}
}
export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {
	const router = useRouter()

	const handleClick = () => router.push(`/pokemon/${id}`)

	return (
		<>
			<Grid xs={12} sm={6} md={4} xl={3} justify='center'>
				<Card
					hoverable
					clickable
					onClick={handleClick}
					css={styles.PokemonCard}
				>
					<Card.Body>
						<Row align='center'>
							<Card.Image src={img} width={40} height={40} />
							<Spacer />
							<Row justify='flex-start' align='center'>
								<Text small css={styles.pokemonBadge}>
									#{id}
								</Text>
								<Spacer />
								<Text transform='capitalize' small>
									{name}
								</Text>
							</Row>
						</Row>
					</Card.Body>
				</Card>
			</Grid>
		</>
	)
}
