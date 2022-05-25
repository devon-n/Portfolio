import { motion } from "framer-motion"
import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { fadeInUp, routeAnimation } from "../animations"
import Head from "next/head"

const resume = () => {

	return (
		<motion.div 
			className="px-6 py-2"
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Head>
				<title>Devon Nathan Portfolio - Resume</title>
			</Head>

			{/* Experience */}
			<h5 className="my-3 text-2xl font-bold">Experience</h5>
			<div className="grid gap-6 md:grid-cols-2"> 
	
					<motion.div variants={fadeInUp} initial="initial" animate="animate">
						<h6 className="my-2 text-xl font-semibold">Blockchain Developer</h6>
						<p className="font-semibold">Panda Siege - 2021/22 (www.pandasiege.app)</p>
						<p className="my-3">
							Developed resueable initial coin offerings, an NFT minting dapp and an NFT marketplace.
						</p>
					</motion.div>
					
					<motion.div variants={fadeInUp} initial="initial" animate="animate">
						<h6 className="my-2 text-xl font-semibold">Full Stack Developer</h6>
						<p className="font-semibold">Crypto Fund Me - 2022 (cryptofundme.eth.link)</p>
						<p className="my-3">
							Created a crowdfunding web3 platform that uses NFTs as the individual crowdfunds on an ENS domain.
						</p>
					</motion.div>
				
			</div>

			{/* Skills */}
			<div className="grid gap-6 md:grid-cols-2">

				<div>
					<h5 className="my-3 text-xl font-bold">Languages and Frameworks</h5>
					<div className="my-2">
						{
							languages.map(language => <Bar data={language} key={language.name} />)
						}
					</div>
				</div>
				
				<div>
					<h5 className="my-3 text-xl font-bold">Tools</h5>
					<div className="my-2">
						{
							tools.map(tool => <Bar data={tool} key={tool.name} />)
						}
					</div>
				</div>

			</div>

		</motion.div>
	)
}

export default resume