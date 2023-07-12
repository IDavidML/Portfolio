import React from 'react'
import { ILanguage, IProject } from '@/types'
import Image from 'next/image'
import Language from './Language'
import Link from 'next/link'

function Project({ portfolio, project } : { portfolio : boolean, project : IProject }) {
  return (
    <article className="mb-14">
      <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide  sm:col-span-2">
          <div className="rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900">
            <Image alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1" className="object-cover w-full h-full" src={`/projects/${project.id}.png`}></Image>
          </div>
        </div>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium flex flex-col gap-1 text-blue-300">
            <div>
              {
                portfolio ? (
                  <a className="inline-flex items-baseline font-medium leading-tight dark:text-blue-200 text-blue-800 hover:dark:text-blue-100 hover:text-blue-800 focus-visible:text-blue-100  group/link text-lg" href={project.url} target="_blank" aria-label="Transporte del Sur">
                    <span className="inline-block">{project.label} <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span className="absolute -inset-x-3 -inset-y-3"></span>
                  </a>
                ) : (
                  <Link className="inline-flex items-baseline font-medium leading-tight dark:text-blue-200 text-blue-800 hover:dark:text-blue-100 hover:text-blue-800 focus-visible:text-blue-100  group/link text-lg" href={`/proyectos/${project.id}`} aria-label="Transporte del Sur">
                    <span className="inline-block">{project.label} <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <span className="absolute -inset-x-3 -inset-y-3"></span>
                  </Link>
                )
              }
            </div>
            <div>
              <div className="dark:text-blue-100/50 text-blue-900/80 font-normal" aria-hidden="true">{project.state}</div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal dark:text-blue-100/80 text-blue-950/80 [&amp;>a]:text-blue-800 dark:[&amp;>a]:text-blue-50 dark:hover:[&amp;>a]:text-cyan-500 hover:[&amp;>a]:text-cyan-700">
            {portfolio ? project.description : (
              <ul className='flex flex-col gap-2'>
                {
                  project.longDescription.map((description, index) => (
                    <li key={`${project.id}/${index}`}>{description}</li>
                  ))
                }
              </ul>
            )}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Tecnologías usadas">
            {
              project.languages.length > 0 ? project.languages.map((language: ILanguage) => {
                return (
                  <li key={project.id + '-' + language.label} className="mr-1.5 mt-2">
                    <Language label={language.label}/>                
                  </li>
                )
              }) : <></>
            }
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Project