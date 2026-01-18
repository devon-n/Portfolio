import { useMemo } from 'react'
import Head from 'next/head'
import { experiences } from '../data/experiences'

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
    </div>
  )
}


export default Resume