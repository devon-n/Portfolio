import { useState, useMemo, useCallback } from "react"
import { projects as projectsData } from "../data/projects"
import { Category } from "../types"
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from "../animations"
import Head from "next/head"
import ProjectsNavbar from "../components/ProjectNavbar"
import ProjectCard from "../components/ProjectCard"
import { useIdentity } from '../context/IdentityContext'

const Projects = () => {
  const [activeItem, setActiveItem] = useState<Category | "all">("all")
  const [showDetail, setShowDetail] = useState<number | null>(null)
  const { identity } = useIdentity();

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
      className="px-6 py-2 h-auto min-h-screen"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Devon Nathan - Projects</title>
      </Head>

      <div className="my-8">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Selected Works</h1>
        <p className="text-xl text-text-muted max-w-2xl leading-relaxed italic">
          {identity === 'architect' ? "Engineering high-throughput multi-chain systems and infrastructure." : "Exploring the bleeding edge of Web3 and AI development."}
        </p>
      </div>

      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={activeItem} />

      <AnimatePresence mode="popLayout">
        {showDetail === null ? (
          <motion.div
            layout
            variants={stagger}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="relative grid grid-cols-12 gap-6 my-10"
          >
            {filteredProjects.map(project => (
              <motion.div
                layout
                variants={fadeInUp}
                className="col-span-12 rounded-3xl p-4 sm:col-span-6 lg:col-span-4 transition-all hover:scale-[1.02]"
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-[500px] my-10"
          >
            <ProjectCard
              project={projectsData.find(p => p.id === showDetail)!}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        )}
      </AnimatePresence>



    </motion.div>
  )
}

export default Projects