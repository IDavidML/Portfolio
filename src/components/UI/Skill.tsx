import { ISkill } from '@/types'
import React from 'react'
import Image from 'next/image'

function Skill({ skill } : { skill : ISkill }) {
  return (
    <figure title="Html" className="col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950">
      <div className="w-14 mx-auto">
        <Image alt={skill.label} width={55} height={55} src={skill.icon} />
      </div>
      <div className="text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3">{skill.label}</div>
    </figure>
  )
}

export default Skill