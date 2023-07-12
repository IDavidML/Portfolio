'use client'

import getPosts from '@/lib/posts'
import { IProject } from '@/types'
import React, { useEffect, useState } from 'react'
import Project from './UI/Project'

function ProjectsList() {

  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    fetch('/data/projects.json', { cache: "no-store",  headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects)
      })
  }, [])

  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-blue-400 text-black/80">Proyectos</h3>
      <div className='grid grid-cols-1'>
        {
          projects.map((project : IProject) => {
            return (
            <Project key={project.id} portfolio={false} project={project}/>
            ) 
          })
        }
      </div>
    </>
  )
}

export default ProjectsList