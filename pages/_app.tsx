import '../styles/globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'


import { IdentityProvider } from '../context/IdentityContext'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


function MyApp({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url) => {
			if (url.startsWith('/projects')) {
				router.prefetch('/projects')
			} else if (url.startsWith('/resume')) {
				router.prefetch('/resume')
			} else if (url.startsWith('/skills')) {
				router.prefetch('/skills')
			} else if (url.startsWith('/about')) {
				router.prefetch('/about')
			}
		}

		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [router])
	const [isCollapsed, setIsCollapsed] = useState(false)

	return (
		<IdentityProvider>
			{/* We keep next-themes for potential compatibility, but IdentityProvider handles the 4 cores */}
			<ThemeProvider attribute="class" forcedTheme="dark">
				<div className="min-h-screen bg-background text-text-main transition-colors duration-500 overflow-x-hidden">
					<div className="flex flex-col md:flex-row gap-6 px-3 py-6 lg:px-20 md:px-6 sm:px-8 max-w-[1920px] mx-auto items-start w-full">
						{/* Sidebar Column (Desktop & Tablet) */}
						<div
							className={`bg-surface rounded-2xl shadow-custom-light border border-border transition-all duration-500 sticky top-6 overflow-hidden shrink-0 hidden md:block mt-0`}
							style={{ width: isCollapsed ? '80px' : '320px' }}
						>
							<Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
						</div>

						{/* Main Content Column (Integrated Sidebar on Small Mobile) */}
						<div className="flex flex-col flex-1 min-w-0 w-full bg-surface shadow-custom-light rounded-2xl border border-border transition-all duration-500 overflow-hidden mt-0">
							{/* Inline Mobile Sidebar Header (Small Mobile Only) */}
							<div className="md:hidden border-b border-border bg-surface/50 backdrop-blur-xl">
								<Sidebar isCollapsed={false} setIsCollapsed={() => { }} />
							</div>

							<Navbar />
							<AnimatePresence mode="wait">
								<Component {...pageProps} key={router.route} />
							</AnimatePresence>
						</div>
					</div>
				</div>




			</ThemeProvider>
		</IdentityProvider>
	)
}



export default MyApp
