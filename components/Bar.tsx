import React, { FunctionComponent } from "react"
import { ISkill } from "../types"
import { motion } from 'framer-motion'
import { barWidthVariants } from "../animations"

const Bar: FunctionComponent<{
    data: ISkill
}> = ({ data: { Icon, name } }) => {
    return (
        <div className="relative text-text-main bg-primary/5 rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-primary/50 group cursor-default">
            {/* Hover Fill Background */}
            <div className="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

            <motion.div
                className="relative flex items-center px-4 py-2 text-text-main z-10"
                style={{ width: "100%" }}
                variants={barWidthVariants}
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-3 text-lg shrink-0 group-hover:scale-110 group-hover:text-background transition-all duration-500" />
                <span className="text-sm font-bold uppercase tracking-tight truncate group-hover:text-background transition-colors duration-500">
                    {name}
                </span>
            </motion.div>
        </div>
    )
}




export default Bar