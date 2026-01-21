import { FunctionComponent } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { MdClose } from 'react-icons/md'
import { IProject } from '../types'
import Image from 'next/image'

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
			<div className="w-full h-full">
				{showDetail === null && (
					<div
						className="cursor-pointer group h-full flex flex-col"
						onClick={() => setShowDetail(id)}
					>
						<div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden glass-card group-hover:border-primary/50 transition-colors shadow-sm">
							<Image
								src={image_path}
								alt={name}
								className="object-cover group-hover:scale-105 transition-transform duration-500"
								fill
								sizes="(max-width: 768px) 100vw, 300px"
								priority
							/>
						</div>
						<p className="my-3 text-center font-bold text-text-main group-hover:text-primary transition-colors tracking-tight">{name}</p>
					</div>
				)}

				{showDetail === id && (
					<div className="grid w-full h-auto p-4 glass-card rounded-3xl md:p-10 md:grid-cols-2 gap-x-12 shadow-2xl relative bg-surface">
						<div className="flex flex-col">
							<div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden bg-background/50">
								<Image
									src={image_path}
									alt={name}
									className="object-cover"
									fill
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
							<div className="flex justify-center my-6 gap-4">
								{github_url && (
									<a
										href={github_url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-6 py-2 gap-3 text-lg glass-card rounded-full font-bold hover:bg-primary hover:text-background transition-all"
									>
										<AiFillGithub /> <span>Github</span>
									</a>
								)}
								{deployed_url && (
									<a
										href={deployed_url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-6 py-2 gap-3 text-lg glass-card rounded-full font-bold hover:bg-primary hover:text-background transition-all"
									>
										<CgWebsite /> <span>Website</span>
									</a>
								)}
							</div>
						</div>

						<div className="flex flex-col">
							<h2 className="mb-4 text-3xl font-black tracking-tighter text-primary uppercase">{name}</h2>
							<p className="mb-6 font-medium text-text-muted leading-relaxed italic">{description}</p>

							<div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
								{key_techs.map((tech) => (
									<span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-bold font-mono uppercase tracking-tighter shadow-sm">
										{tech}
									</span>
								))}
							</div>
						</div>

						<button
							onClick={() => setShowDetail(null)}
							className="absolute p-2 glass-card rounded-full top-4 right-4 focus:outline-none hover:bg-red-500/20 hover:text-red-500 transition-colors z-30 border border-border/50"
							aria-label="Close project details"
						>
							<MdClose size={24} />
						</button>
					</div>
				)}
			</div>
		)
	}

export default ProjectCard