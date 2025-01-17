import { motion } from "framer-motion"
import Bar from "../components/Bar"
import { experiences, languages, tools } from "../data"
import { fadeInUp, routeAnimation } from "../animations"
import Head from "next/head"
import { IExperienceItemProps } from "../types"

const ExperienceItem: React.FC<IExperienceItemProps> = ({ title, company, period, description }) => {
	return (
	  <motion.div variants={fadeInUp} initial="initial" animate="animate">
		<h6 className="my-2 text-xl font-semibold">{title}</h6>
		<p className="font-semibold">{company} - {period}</p>
		<p className="my-3">{description}</p>
	  </motion.div>
	);
  };

const Resume = () => {

	return (
		<motion.div
			className="px-6 py-2"
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<Head>
				<title>Devon Nathan Portfolio - Resume</title>
			</Head>

			<h5 className="my-3 text-2xl font-bold">Experience</h5>
			<div className="grid gap-6 md:grid-cols-2">
				{experiences.map((exp, index) => (
				<ExperienceItem
					key={index}
					title={exp.title}
					company={exp.company}
					period={exp.period}
					description={exp.description}
				/>
				))}
			</div>

			<div className="grid gap-6 md:grid-cols-2">

				<div>
					<h5 className="my-3 text-xl font-bold">Languages and Frameworks</h5>
					<div className="my-2">
						{ languages.map(language => <Bar data={language} key={language.name} />) }
					</div>
				</div>

				<div>
					<h5 className="my-3 text-xl font-bold">Tools</h5>
					<div className="my-2">
						{ tools.map(tool => <Bar data={tool} key={tool.name} />) }
					</div>
				</div>

			</div>

		</motion.div>
	)
}

export default Resume