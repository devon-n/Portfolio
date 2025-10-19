import React, { FunctionComponent } from "react"
import { ISkill } from "../types"
import { motion } from 'framer-motion'
import { barWidthVariants } from "../animations"

const Bar: FunctionComponent<{
    data: ISkill
}> = ({ data: { Icon, name } }) => {
    return (
        <div className="my-2 text-text-light bg-background-light dark:bg-background-dark rounded-full dark:text-text-dark transition-colors duration-500">
            <motion.div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-background-light to-primary-light dark:from-background-dark dark:to-primary-dark"
                style={{ width: "100%" }}
                variants={barWidthVariants}
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