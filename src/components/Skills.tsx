'use client'

import { ISkill } from '@/types'
import React, { useEffect, useState } from 'react'
import Skill from './UI/Skill'

function Skills() {
  const [skills, setSkills] = useState<ISkill[]>([])

  useEffect(() => {
    fetch('/data/skills.json', { cache: "no-store",  headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills)
      })
  }, [])

  return (
    <section id="habilidades" className="py-24 max-[1100px]:pt-5">
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-blue-400 text-black/80">Habilidades</h3>
      <div className="mx-auto">
        <div className="grid grid-cols-4  space-x-2 justify-center items-center">
        {
          skills.map((skill : ISkill) => {
           return (
            <Skill key={'SKL-' + skill.id} skill={skill}/>
           ) 
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Skills