import { FunctionComponent } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

const ProjectCard: FunctionComponent<{
	project: IProject,
	showDetail: null | number,
	setShowDetail: (id: number | null) => void
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
					<motion.div
						layoutId={`project-${id}`}
						className="cursor-pointer"
						onClick={() => setShowDetail(id)}
					>
						<motion.div
							layoutId={`image-${id}`}
							className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden glass-card"
						>
							<Image
								src={image_path}
								alt={name}
								className="object-cover"
								fill
								sizes="(max-width: 768px) 100vw, 300px"
								priority
							/>
						</motion.div>
						<motion.p layoutId={`name-${id}`} className="my-2 text-center font-bold">{name}</motion.p>
					</motion.div>
				)}



				{showDetail === id && (
					<motion.div
						layoutId={`project-${id}`}
						className="absolute top-0 left-0 z-20 grid w-full h-auto p-4 glass-card rounded-3xl md:p-10 md:grid-cols-2 gap-x-12 shadow-2xl"
					>
						<motion.div
							variants={stagger}
							initial="initial"
							animate="animate">
							<motion.div
								layoutId={`image-${id}`}
								className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden border border-border"
							>
								<Image
									src={image_path}
									alt={name}
									className="object-cover"
									fill
									sizes="(max-width: 768px) 100vw, 300px"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="flex justify-center my-6 space-x-4">
								{github_url ?
									<a href={github_url} target="_blank" rel="noreferrer" className="flex items-center px-6 py-2 space-x-3 text-lg glass-card rounded-full font-bold hover:bg-primary hover:text-background transition-all">
										<AiFillGithub /> <span>Github</span>
									</a> : null
								}
								{deployed_url ?
									<a href={deployed_url} target="_blank" rel="noreferrer" className="flex items-center px-6 py-2 space-x-3 text-lg glass-card rounded-full font-bold hover:bg-primary hover:text-background transition-all">
										<CgWebsite /> <span>Website</span>
									</a> : null
								}

							</motion.div>
						</motion.div>

						<motion.div variants={stagger} initial="initial" animate="animate" className="flex flex-col">
							<motion.h2 layoutId={`name-${id}`} className="mb-4 text-3xl font-black tracking-tighter text-primary">{name}</motion.h2>
							<motion.p variants={fadeInUp} className="mb-6 font-medium text-text-muted leading-relaxed">{description}</motion.p>

							<motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
								{key_techs.map((tech) => (
									<span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold font-mono">
										{tech}
									</span>
								))}
							</motion.div>
						</motion.div>

						<button
							onClick={() => setShowDetail(null)}
							className="absolute p-2 glass-card rounded-full top-6 right-6 focus:outline-none hover:bg-red-500/20 hover:text-red-500 transition-colors"
						>
							<MdClose size={24} />
						</button>

					</motion.div>
				)}


			</div>
		)
	}

export default ProjectCard