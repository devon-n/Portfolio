import { FunctionComponent } from "react"
import { ISkill } from "../types"
import { motion } from 'framer-motion'

const Bar:FunctionComponent<{
	data:ISkill
}> = ({ data:{Icon, level, name} }) => {

	const bar_width = `${level}`
	const variants = {
		initial: {
			width: 0
		},
		animate: {
			width: bar_width,
			transition: {
				duration: 0.6,
				type: "spring",
				damping: 30,
				stiffness: 100
			}
		}
	}


	return (
		<div className="my-2 text-gray-700 bg-gray-300 rounded-full dark:bg-dark-300 dark:text-white">
			
			<motion.div 
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-200 to-blue-300 dark:from-dark-200 dark:to-lime-400" 
				style={{ width: level }}
				variants={variants}
				initial="initial"
				animate="animate"
				>
				<Icon className="mx-3" />
				{name}
			</motion.div>

		</div>
	)
}

export default Bar