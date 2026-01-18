import { motion } from 'framer-motion'
import Head from 'next/head'
import Bar from '../components/Bar'
import { languages } from '../data/languages'
import { tools } from '../data/tools'
import { fadeInUp, stagger } from '../animations'

const Skills = () => {
    return (
        <motion.div
            className="px-6 py-2"
            variants={stagger}
            initial="initial"
            animate="animate"
        >
            <Head>
                <title>Devon Nathan - Skills</title>
                <meta name="description" content="A comprehensive technical breakdown of expertise across JavaScript ecosystems, AI development in Python, Database architecture, and Blockchain protocol engineering." />
            </Head>


            <div className="my-8">
                <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Expertise & Toolbelt</h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed italic">
                    A comprehensive view of my technical foundations across the Web3, AI, and Full Stack landscapes.
                </p>
            </div>

            <div className="grid gap-10 mt-12 mb-10">
                {/* JavaScript */}
                <motion.div variants={fadeInUp}>
                    <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">JavaScript</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[...languages, ...tools].filter(s => s.category === "javascript").map(skill => (
                            <Bar key={skill.name} data={skill} />
                        ))}
                    </div>
                </motion.div>

                {/* Python */}
                <motion.div variants={fadeInUp}>
                    <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Python</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[...languages, ...tools].filter(s => s.category === "python").map(skill => (
                            <Bar key={skill.name} data={skill} />
                        ))}
                    </div>
                </motion.div>

                {/* Databases */}
                <motion.div variants={fadeInUp}>
                    <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Databases</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[...languages, ...tools].filter(s => s.category === "databases").map(skill => (
                            <Bar key={skill.name} data={skill} />
                        ))}
                    </div>
                </motion.div>

                {/* Blockchain */}
                <motion.div variants={fadeInUp}>
                    <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Blockchain</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[...languages, ...tools].filter(s => s.category === "blockchain").map(skill => (
                            <Bar key={skill.name} data={skill} />
                        ))}
                    </div>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Skills
