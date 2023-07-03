'use client'

import { IProject } from '@/types'
import React, { useEffect, useState } from 'react'
import Project from './UI/Project'

function Projects() {

  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    fetch('/data/projects.json', { cache: "no-store",  headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects)
      })
  }, [])

  return (
    <section id="proyectos" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-blue-400 text-black/80">Proyectos</h3>
        {
          projects.map((project : IProject) => {
           return (
            <Project key={project.id} project={project}/>
           ) 
          })
        }
      </div>
    </section>
  )
}

export default Projects