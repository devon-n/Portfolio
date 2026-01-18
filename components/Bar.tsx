import React, { FunctionComponent } from "react"
import { ISkill } from "../types"
import { motion } from 'framer-motion'
import { barWidthVariants } from "../animations"

const Bar: FunctionComponent<{
    data: ISkill
}> = ({ data: { Icon, name } }) => {
    return (
        <div className="my-2 text-text-main bg-primary/5 rounded-full overflow-hidden border border-border transition-colors duration-500">
            <motion.div
                className="flex items-center px-4 py-2 bg-gradient-to-r from-primary/40 to-primary text-background font-bold"
                style={{ width: "100%" }}
                variants={barWidthVariants}
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-3 text-xl" />
                {name}
            </motion.div>
        </div>
    )
}


export default Bar