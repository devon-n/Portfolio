import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../animations'
const index = () => {

	return (
		<motion.div 
			className="flex flex-col flex-grow px-6 pt-1" 
			variants={routeAnimation} 
			initial="initial" 
			animate="animate"
			exit="exit"
		>
			<h5 className="my-3 font-medium">
				I am a driven, self-taught programmer with experience in smart contracts and machine learning.
				I am always hungry to learn more in my journey and contributions to the crypto and AI space. 
			</h5>
			<motion.div
				variants={stagger}
				initial="initial"
				animate="animate"
				className="flex-grow p-4 mt-5 dark:bg-dark" 
				style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
			>
				<h6 className="my-3 text-xl font-bold tracking-wide">What I can do</h6>
				<div className="grid gap-6 lg:grid-cols-2">	
					{services.map((service, index) => (
						<motion.div
							variants={fadeInUp}
							className="bg-gray-100 rounded-lg dark:bg-dark-100 lg:col-span-1" key={index}
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
	)
}

export default index