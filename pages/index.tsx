import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import Head from 'next/head'


const About = () => {

	return (
		<motion.div
			className="flex flex-col flex-grow px-6 pt-1"
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Head>
				<title>Devon Nathan Portfolio - About</title>
			</Head>
			<h4 className="my-3 text-lg font-medium">
				Lead Blockchain Architect specializing in EVM smart contract development and high-value multi-chain
				(EVM & Tezos) architectural integration. I deliver end-to-end solutions, from initial concept and
				robust design to full-stack execution, leveraging expertise in TypeScript, Python, Solidity, and
				modern frameworks like React and Next.js.
				<br /><br />
				Highly skilled in building the critical infrastructure required for production Web3 projects,
				including scalable indexers, custom monitoring solutions, and data pipelines on Google Cloud Platform
				(GCP) with BigQuery and MySQL. My focus is on delivering robust, secure, and innovative solutions
				for decentralized finance, advanced analytics, and automation. I also have experience with AI/ML,
				automated testing, and professional UI/UX design.
			</h4>
			<motion.div
				variants={stagger}
				initial="initial"
				animate="animate"
				className="flex-grow p-4 mt-5"
				style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
			>
				<h5 className="my-3 text-xl font-bold tracking-wide">What I can do</h5>
				<div className="grid gap-6 lg:grid-cols-2">
					{services.map((service, index) => (
						<motion.div
							variants={fadeInUp}
							className="bg-surface-light rounded-lg dark:bg-background-dark lg:col-span-1" key={index}
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
	)
}

export default About