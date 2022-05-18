
// react
import { FC } from 'react'

// nextUI
import { Container, Image, Text } from '@nextui-org/react'

export const FavoritesNotFound: FC = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				height: 'calc(100vh - 100px)'
			}}
		>
			<Text h2>Favorites is empty</Text>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
				css={{ opacity: 0.3, maxHeight: '100px', marginTop: '20px' }}
			/>
		</Container>
	)
}
