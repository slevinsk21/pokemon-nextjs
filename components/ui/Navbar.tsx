// next
import Image from 'next/image'
import NextLink from 'next/link'

import { Link, Text, useTheme } from '@nextui-org/react'

export const Navbar = () => {
	const { theme } = useTheme()

	return (
		<div style={{ backgroundColor: theme?.colors.purple50.value }}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: '0 12px',
					height: '60px',
					maxWidth: '1175px',
					margin: '0 auto',
				}}
			>
				<NextLink href='/' passHref>
					<Link>
						<Text h2 color='white' css={{ flex: 1 }}>
							Pokémon
						</Text>
					</Link>
				</NextLink>

				<NextLink href='/favorites' passHref>
					<Link>
						<Text h3 color='white'>
							❤️
						</Text>
					</Link>
				</NextLink>
			</div>
		</div>
	)
}
