// react
import { FC, ReactNode } from 'react'

// next
import Head from 'next/head'


// components
import { Navbar } from '../ui'

interface Props {
	children: ReactNode
	title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {

	const origin = typeof window === 'undefined' ?  '' : window.location

	return (
		<>
			<Head>
				<title>{`${title} • Pokemon App` || 'Pokemon App'}</title>
				<meta name='author' content='lnl.cast' />
				<meta
					name='description'
					content={`Información sobre el pokémon ${title}`}
				/>
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />

				<meta property="og:title" content={`Informatio about ${title}`} />
				<meta property="og:description" content="Pokemon page • builded with react, ts and framework NetxJS" />
				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0 12px',
					maxWidth: '1175px',
					margin: '0 auto',
					minHeight: '100vh'
				}}
			>
				{children}
			</main>
		</>
	)
}
