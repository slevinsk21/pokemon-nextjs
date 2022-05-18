// react
import React, { FC } from 'react'

// next
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
	pokemonId: number
}
export const FavoriteCardPokemon: FC<Props> = ({ pokemonId: id }) => {
	const router = useRouter()

	const handleClickFavorite = () => router.push(`/pokemon/${id}`)

	return (
		<Grid xs={12} sm={3} md={2} onClick={handleClickFavorite}>
			<Card hoverable clickable css={{ padding: '30px' }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					width={100}
				/>
			</Card>
		</Grid>
	)
}
