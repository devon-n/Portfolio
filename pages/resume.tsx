import Head from 'next/head'
import { motion } from 'framer-motion'
import { experiences } from '../data/experiences'
import { fadeIn, stagger } from '../animations'
import { IExperienceItemProps } from '../types'

const ExperienceItem: React.FC<IExperienceItemProps> = ({ title, company, period, description }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.02 }}
    className='glass-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-colors'
  >
    <h6 className="text-xl font-black text-primary tracking-tighter uppercase">{title}</h6>
    <p className="font-bold text-sm text-text-muted mt-1 uppercase tracking-widest">{company} | {period}</p>
    <p className="my-4 text-text-main leading-relaxed">{description}</p>
  </motion.div>
)

const Resume = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="px-4 md:px-6 py-2 h-auto min-h-screen"
    >
      <Head>
        <title>{`Devon Nathan - Resume`}</title>
        <meta name="description" content="A detailed timeline of Devon Nathan's professional path, highlighting high-impact engineering leadership, smart contract development, and infrastructure architecture." />
      </Head>

      <div className="my-8">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-primary uppercase">Professional Path</h1>
        <p className="text-xl text-text-muted max-w-2xl leading-relaxed italic">
          A timeline of high-impact engineering and leadership across various tech stacks.
        </p>
      </div>

      {/* Experience */}
      <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase text-primary">Experience</h5>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceItem key={`${exp.company}-${index}`} {...exp} />
        ))}
      </div>
    </motion.div>
  )
}

export default Resume