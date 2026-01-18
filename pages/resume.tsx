import { useMemo } from 'react'
import Head from 'next/head'
import Bar from '../components/Bar'
import { experiences } from '../data/experiences'
import { languages } from '../data/languages'
import { tools } from '../data/tools'

const Resume = () => {
  const experiencesMemo = useMemo(() => experiences, [])

  const ExperienceItem = ({ title, company, period, description }) => (
    <div className='glass-card p-6 rounded-3xl transition-all hover:scale-[1.02]'>
      <h6 className="text-xl font-black text-primary tracking-tighter uppercase">{title}</h6>
      <p className="font-bold text-sm text-text-muted mt-1 uppercase tracking-widest">{company} | {period}</p>
      <p className="my-4 text-text-main leading-relaxed">{description}</p>
    </div>
  )

  return (
    <div className="px-6 py-2">
      <Head>
        <title>Devon Nathan - Resume</title>
      </Head>

      <div className="my-8">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Professional Path</h1>
        <p className="text-xl text-text-muted max-w-2xl leading-relaxed italic">
          A timeline of high-impact engineering and leadership across various tech stacks.
        </p>
      </div>

      {/* Experience */}
      <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Experience</h5>
      <div className="grid gap-6 md:grid-cols-2">
        {experiencesMemo.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      {/* Skills Groups */}
      <div className="grid gap-10 mt-12 mb-10">
        {/* JS Ecosystem */}
        <div>
          <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">JavaScript Ecosystem</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.filter(l => ["TypeScript", "JavaScript", "ReactJS", "NextJS", "VueJS", "ExpressJS", "Jest", "Telegram API"].includes(l.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
            {tools.filter(t => ["Tailwind CSS", "MobX", "Material UI"].includes(t.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
          </div>
        </div>

        {/* Python & AI */}
        <div>
          <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Python & AI</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.filter(l => ["Python", "Flask", "PyTest"].includes(l.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
            {tools.filter(t => ["Keras", "Neuro-evolution of Augmented Topologies", "Genetic Algorithms"].includes(t.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
          </div>
        </div>

        {/* Data & Cloud */}
        <div>
          <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Data & Storage</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.filter(t => ["MySQL", "BigQuery", "MongoDB", "Firebase", "Google Cloud Platform"].includes(t.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
          </div>
        </div>

        {/* Blockchain & Web3 */}
        <div>
          <h5 className="my-6 text-2xl font-bold border-l-4 border-primary pl-4 tracking-widest uppercase">Blockchain & Web3</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.filter(l => ["Solidity"].includes(l.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
            {tools.filter(t => ["Ethers/Web3", "Truffle/Hardhat/Brownie/Foundry"].includes(t.name)).map(skill => (
              <Bar key={skill.name} data={skill} />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Resume