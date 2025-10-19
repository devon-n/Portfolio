import { FunctionComponent } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

const ProjectCard:FunctionComponent<{
	project:IProject,
	showDetail: null | number,
	setShowDetail:(id: number | null) => void
}> = ({
	project: {
		id,
		name,
		description,
		image_path,
		deployed_url,
		github_url,
		key_techs
	},
	showDetail,
	setShowDetail
}) => {

	return (
		<div>
			{showDetail === null && (
				<div>
					<Image
						src={image_path}
						alt={name}
						className="cursor-pointer"
						onClick={() => setShowDetail(id)}
						width="300"
						height="150"
						layout="responsive"/>
					<p className="my-2 text-center">{name}</p>

				</div>
			)}

			{showDetail === id && (
			<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 bg-background-light rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:bg-background-dark">
				<motion.div
					variants={stagger}
					initial="initial"
					animate="animate">
					<motion.div variants={fadeInUp} className="border-4 border-gray-100">
						<Image src={image_path} alt={name} layout="responsive" width="300" height="150"/>
					</motion.div>
						<motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
							{github_url ?
								<a href={github_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-3 text-lg bg-background-light rounded-md dark:bg-background-dark">
									<AiFillGithub /> <span>Github</span>
								</a> : null
							}
							{deployed_url ?
								<a href={deployed_url} target="_blank" rel="noreferrer" className="flex items-center px-4 py-2 space-x-3 text-lg bg-background-light rounded-md dark:bg-background-dark">
									<CgWebsite /> <span>URL</span>
								</a> : null
							}
						</motion.div>
				</motion.div>

				<motion.div variants={stagger} initial="initial" animate="animate">
					<motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
					<motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
					<motion.div variants={fadeInUp}  className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
						{key_techs.map((tech, index) => (
							<span key={tech} className="px-2 py-1 my-1 bg-background-light rounded-sm dark:bg-background-dark">
								{tech}
							</span>
						))}
					</motion.div>
				</motion.div>
				<button>
					<MdClose size={30}  onClick={() => setShowDetail(null)}
					className="absolute p-1 bg-background-light rounded-full top-3 right-3 focus:outline-none dark:bg-background-dark"/>
				</button>

			</div>
			)}
		</div>
	)
}

export default ProjectCard