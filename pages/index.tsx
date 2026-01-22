import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Head from 'next/head'
import { useIdentity } from '../context/IdentityContext'
import ImpactTicker from '../components/ImpactTicker'
import ArchitectureGraph from '../components/ArchitectureGraph'
import NeuralCanvas from '../components/NeuralCanvas'
import CyberTerminal from '../components/CyberTerminal'
import ServiceCard from '../components/ServiceCard'
import { IService, ServiceCategory, ThemeType } from '../types'
import { services } from '../data/services'
import { useMemo } from 'react'

const About = () => {
	const { identity } = useIdentity();

	// Standard: Pre-process and memoize data transformations
	const servicesByCategory: Record<ServiceCategory, IService[]> = useMemo(() => {
		return services.reduce((acc, service) => {
			if (!acc[service.category]) {
				acc[service.category] = [];
			}
			acc[service.category].push(service);
			return acc;
		}, {} as Record<ServiceCategory, IService[]>);
	}, []);

	const serviceCategories: ServiceCategory[] = Object.values(ServiceCategory);

	const content: Record<ThemeType, { title: string; description: string; feature: React.ReactNode }> = {
		[ThemeType.Architect]: {
			title: "Lead Solutions Architect",
			description: "Specializing in high-value multi-chain integration and robust EVM infrastructure. I build the systems that bridge millions in capital and govern critical Web3 protocols.",
			feature: (
				<>
					<ImpactTicker />
					<ArchitectureGraph />
				</>
			)
		},
		[ThemeType.Neural]: {
			title: "AI Research Engineer",
			description: "Exploring the intersection of neuro-evolution. Building autonomous agents and self-evolving algorithms.",
			feature: <NeuralCanvas />
		},
		[ThemeType.Matrix]: {
			title: "Matrix Systems Specialist",
			description: "Shipping high-concurrency smart contracts for the next generation of AAA Web3 gaming. Hardening protocols and bridging assets across the metaverse.",
			feature: <CyberTerminal />
		}
	}

	const activeContent: { title: string; description: string; feature: React.ReactNode } = content[identity as ThemeType] || content[ThemeType.Matrix];

	return (
		<motion.div
			className="flex flex-col flex-grow px-4 md:px-6 pt-1 mb-10"
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Head>
				<title>{`Devon Nathan - ${activeContent.title}`}</title>
				<meta name="description" content="Senior Software Engineer specializing in high-value multi-chain integration, AI research, and robust Web3 infrastructure. Explore my technical foundations and professional persona." />
			</Head>

			<div className="my-8">
				<motion.h1
					layout
					className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-primary uppercase"
				>
					{activeContent.title}
				</motion.h1>
				<motion.p
					layout
					className="text-lg md:text-xl text-text-muted max-w-3xl leading-relaxed italic"
				>
					{activeContent.description}
				</motion.p>
			</div>

			<motion.div
				layout
				className="flex-grow mb-12"
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={identity}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
					>
						{activeContent.feature}
					</motion.div>
				</AnimatePresence>
			</motion.div>

			<motion.div variants={stagger} initial="initial" animate="animate" className="space-y-12">
				{serviceCategories.map((category: ServiceCategory) => (
					<div key={category}>
						<h5 className="my-3 text-2xl font-bold tracking-wide border-l-4 border-primary pl-4 uppercase text-primary">
							{category}
						</h5>
						<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
							{(servicesByCategory[category] || []).map((service: IService, index: number) => (
								<motion.div variants={fadeInUp} className="glass-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden" key={`${service.title}-${index}`}>
									<ServiceCard service={service} />
								</motion.div>
							))}
						</div>
					</div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default About