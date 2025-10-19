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
                Experienced blockchain engineer specializing in smart contract development, DeFi protocols, and full-stack Web3 applications using TypeScript, Python, Solidity, and frameworks like React and Next.js.
                Skilled in building scalable indexers, monitoring solutions, and data pipelines with Express, Google Cloud Platform, BigQuery, and MySQL.
                Proficient in AI/ML integration, automated testing, and frontend UI/UX design with Material UI and Tailwind CSS.
                Passionate about delivering robust, secure, and innovative solutions for decentralized finance, analytics, and automation.
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