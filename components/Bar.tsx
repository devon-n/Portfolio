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
		<div className="my-2 text-text-light bg-background-ligh dark:bg-background-dark rounded-full dark:bg-background-dark dark:text-text-dark">

			<motion.div
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark"
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