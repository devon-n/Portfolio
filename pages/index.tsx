import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Head from 'next/head'
import { useIdentity } from '../context/IdentityContext'
import ImpactTicker from '../components/ImpactTicker'
import ArchitectureGraph from '../components/ArchitectureGraph'
import NeuralCanvas from '../components/NeuralCanvas'
import CyberTerminal from '../components/CyberTerminal'


const About = () => {
	const { identity } = useIdentity();

	const content = {
		architect: {
			title: "Lead Blockchain Architect",
			description: "Specializing in high-value multi-chain integration and robust EVM infrastructure. I build the systems that bridge millions in capital and govern critical Web3 protocols.",
			feature: (
				<>
					<ImpactTicker />
					<ArchitectureGraph />
				</>
			)

		},
		neural: {
			title: "AI & Web3 Research Engineer",
			description: "Exploring the intersection of neuro-evolution and decentralized systems. Building autonomous agents and self-evolving algorithms for the future of on-chain intelligence.",
			feature: <NeuralCanvas />
		},
		cyber: {
			title: "Cyber-Engineer & GameFi Specialist",
			description: "Shipping high-concurrency smart contracts for the next generation of AAA Web3 gaming. Hardening protocols and bridging assets across the metaverse.",
			feature: <CyberTerminal />
		},
		minimalist: {
			title: "Technical Lead",
			description: "Focused on clarity, performance, and narrative-driven engineering leadership. Developing seamless user experiences for complex backend architectures.",
			feature: null
		}
	}

	const activeContent = content[identity];

	return (
		<motion.div
			className="flex flex-col flex-grow px-6 pt-1 mb-10"
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Head>
				<title>Devon Nathan - {activeContent.title}</title>
			</Head>

			<div className="my-8">
				<motion.h1
					layout
					className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
				>
					{activeContent.title}
				</motion.h1>
				<motion.p
					layout
					className="text-xl text-text-muted max-w-3xl leading-relaxed"
				>
					{activeContent.description}
				</motion.p>
			</div>

			{activeContent.feature}

			<motion.div
				variants={stagger}
				initial="initial"
				animate="animate"
				className="flex-grow p-4 mt-5"
				style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
			>
				{/* Engineering & Infrastructure */}
				<h5 className="my-3 text-2xl font-bold tracking-wide border-l-4 border-primary pl-4 uppercase">Engineering & Infrastructure</h5>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
					{services.filter(s => ["Systems Architecture", "Frontend UI/UX Development", "Backend Development & APIs", "DevOps & Cloud Deployment"].includes(s.title)).map((service, index) => (
						<motion.div variants={fadeInUp} className="glass-card rounded-2xl" key={index}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</div>

				{/* Data & Automation */}
				<h5 className="my-3 text-2xl font-bold tracking-wide border-l-4 border-primary pl-4 uppercase">Data & Automation</h5>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
					{services.filter(s => ["Indexer Development", "Monitoring & Alerting Solutions", "Data Engineering & Analytics", "Web Scraping & Automation"].includes(s.title)).map((service, index) => (
						<motion.div variants={fadeInUp} className="glass-card rounded-2xl" key={index}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</div>

				{/* Blockchain & Security */}
				<h5 className="my-3 text-2xl font-bold tracking-wide border-l-4 border-primary pl-4 uppercase">Blockchain, AI & Security</h5>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{services.filter(s => ["Smart Contract Developer", "Smart Contract Security", "Artificial Intelligence Engineer", "Automated Testing & QA", "Telegram Bot Development"].includes(s.title)).map((service, index) => (
						<motion.div variants={fadeInUp} className="glass-card rounded-2xl" key={index}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</div>
			</motion.div>

		</motion.div>
	)
}

export default About