import React, { FC, ReactNode } from 'react'

import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
	children: ReactNode
	title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
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
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0 12px',
					maxWidth: '1175px',
					margin: '0 auto',
					minHeight: '100vh',
				}}
			>
				{children}
			</main>
		</>
	)
}
