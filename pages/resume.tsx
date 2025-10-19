import { useMemo } from 'react'
import Head from 'next/head'
import Bar from '../components/Bar'
import { languages, tools, experiences } from '../data'

const Resume = () => {
  const experiencesMemo = useMemo(() => experiences, [])

  const ExperienceItem = useMemo(() => {
    const Item = ({ title, company, period, description }) => (
      <div className='bg-background-light dark:bg-background-dark p-2 rounded-lg transition-colors duration-500'>
        <h6 className="my-2 text-xl font-semibold text-primary-light dark:text-primary-dark">{title}</h6>
        <p className="font-semibold">{company} - {period}</p>
        <p className="my-3">{description}</p>
      </div>
    )
    Item.displayName = 'ExperienceItem'
    return Item
  }, [])

  return (
    <div className="px-6 py-2">
      <Head>
        <title>Devon Nathan Portfolio - Resume</title>
      </Head>

      {/* Experience */}
      <h5 className="my-3 text-2xl font-bold">Experience</h5>
      <div className="grid gap-6 md:grid-cols-2">
        {experiencesMemo.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      {/* Skills */}
      <div className="grid gap-6 md:grid-cols-2 transition-colors duration-500">
        <div>
          <h5 className="my-3 text-xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map(language => <Bar key={language.name} data={language} />)}
          </div>
        </div>

        <div className="transition-colors duration-500">
          <h5 className="my-3 text-xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map(tool => <Bar key={tool.name} data={tool} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume