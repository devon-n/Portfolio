import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import IdentitySwitcher from '../components/IdentitySwitcher'

import { IdentityProvider } from '../context/IdentityContext'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (url.startsWith('/projects')) {
				router.prefetch('/projects')
			} else if (url.startsWith('/resume')) {
				router.prefetch('/resume')
			} else if (url.startsWith('/about')) {
				router.prefetch('/about')
			}
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router])

	return (
		<IdentityProvider>
			{/* We keep next-themes for potential compatibility, but IdentityProvider handles the 4 cores */}
			<ThemeProvider attribute="class" forcedTheme="dark">
				<div className="min-h-screen bg-background text-text-main transition-colors duration-500">
					<div className="grid grid-cols-12 gap-6 px-5 py-14 lg:px-20 md:px-12 sm:px-8">
						<div className="col-span-12 text-center bg-surface lg:col-span-3 rounded-2xl shadow-custom-light border border-border transition-all duration-500">
							<Sidebar />
						</div>

						<div className="flex flex-col col-span-12 overflow-hidden bg-surface shadow-custom-light rounded-2xl lg:col-span-9 border border-border transition-all duration-500">
							<Navbar />
							<AnimatePresence mode="wait">
								<Component {...pageProps} key={router.route} />
							</AnimatePresence>
						</div>
					</div>
					<IdentitySwitcher />
				</div>

			</ThemeProvider>
		</IdentityProvider>
	)
}



export default MyApp
