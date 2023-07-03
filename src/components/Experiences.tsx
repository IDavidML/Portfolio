'use client'

import React, { useEffect, useState } from 'react'
import Experience from './UI/Experience'
import { IExperience } from '@/types'

function Experiences() {

  const [experiences, setExperiences] = useState<IExperience[]>([])

  useEffect(() => {
    fetch('/data/experiences.json', { cache: "no-store",  headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data.experiences)
      })
  }, [])

  return (
    <section id="experiencia" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-blue-400 text-black/80">Experiencia</h3>
        {
          experiences.map((experience : IExperience) => {
           return (
            <Experience key={experience.id} experience={experience}/>
           ) 
          })
        }
      </div>
    </section>
  )
}

export default Experiences