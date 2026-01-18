import React, { FunctionComponent } from "react"
import { ISkill } from "../types"
import { motion } from 'framer-motion'
import { barWidthVariants } from "../animations"

const Bar: FunctionComponent<{
    data: ISkill
}> = ({ data: { Icon, name } }) => {
    return (
        <div className="text-text-main bg-primary/5 rounded-xl overflow-hidden border border-border transition-all duration-500 hover:border-primary/50 group">
            <motion.div
                className="flex items-center px-3 py-1.5 bg-gradient-to-r from-primary/20 to-primary/40 text-white"
                style={{ width: "100%" }}
                variants={barWidthVariants}
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-2 text-base shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-tighter truncate">{name}</span>
            </motion.div>
        </div>
    )
}



export default Bar