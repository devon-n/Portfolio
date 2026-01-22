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
			</div>
		)
	}

export default ProjectCard