import { useState, useMemo, useCallback } from "react"
import { projects as projectsData } from "../data/projects"
import { Category } from "../types"
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from "../animations"
import Head from "next/head"
import dynamic from "next/dynamic"

const ProjectCard = dynamic(() => import("../components/ProjectCard"))
const ProjectsNavbar = dynamic(() => import("../components/ProjectNavbar"))

const Projects = () => {
  const [activeItem, setActiveItem] = useState<Category | "all">("all")
  const [showDetail, setShowDetail] = useState<number | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeItem === "all") {
      return projectsData
    }
    return projectsData.filter(project => project.category.includes(activeItem))
  }, [activeItem])

  const handlerFilterCategory = useCallback((category: Category | "all") => {
    setActiveItem(category)
    setShowDetail(null)
  }, [])

  return (
    <motion.div
	  className="px-5 py-2 h-auto min-h-screen"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Devon Nathan Portfolio - Projects</title>
      </Head>
      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={activeItem} />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {filteredProjects.map(project => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 p-2 rounded-lg bg-background-light sm:col-span-6 lg:col-span-4 dark:bg-background-dark"
            key={project.name}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects