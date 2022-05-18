// react
import { FC, useEffect, useState } from 'react'

// next
import { NextPage } from 'next'

// nextUI
import { Card, Container, Grid, Text } from '@nextui-org/react'

// components
import { MainLayout } from '../../components/layouts'
import { FavoritesNotFound } from '../../components/ui'
import { FavoritePokemons } from '../../components/pokemon'

// utils
import { localFavorites } from '../../utils'

interface Props {
	pokemon: number[]
}

const FavoritesPage: NextPage<Props> = () => {
	const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])

	useEffect(() => {
		setfavoritePokemons(localFavorites.getPokemons())
	}, [])

	return (
		<MainLayout title='Favorites'>
			{!favoritePokemons.length ? (
				<FavoritesNotFound />
			) : (
				<FavoritePokemons pokemons={favoritePokemons} />
			)}
		</MainLayout>
	)
}

export default FavoritesPage
