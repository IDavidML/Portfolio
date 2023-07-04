import React from 'react'
import Image from 'next/image'

function Welcome() {
  return (
    <section className="h-screen relative flex items-center max-w-[1000px] mx-auto">
      <div className="p-0 h-full text-center w-full page-center max-[700px]:after:hidden">
        <div className="flex items-center flex-col justify-center w-full gap-4">
          <div className="opacity-90 w-36 scale-150 h-36 mb-4">
            <Image alt="Avatar - David" width="150" height="150" decoding="async" data-nimg="1" className="w-full h-full" src="/avatar.png"></Image>
          </div>
          <div className="flex flex-col -z-10 gap-3 max-[700px]:px-2">
            <h1 className="font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-blue-200 dark:to-blue-400 from-blue-200 to-blue-400">
              <span className="shake-left-right inline-flex">
                <Image alt="Wave Icon" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" src="/icons/wave.png"></Image>
              </span>
              &nbsp;
              <span>Hola!{' '}Soy</span>
              <br/>
              <span>David Morales</span>
            </h1>
            <h2 className="dark:text-blue-100 text-neutral-700 tracking-tight font-semibold text-2xl">Desarrollador Fullstack</h2>
          </div>
        </div>
      </div>
      <div className="absolute shadow-2xl bottom-3 left-[50%] translate-x-[-50%]">
        <a href="#content" className="animate-bounce block">
          <Image alt="Pointing Icon" loading="lazy" width="37" height="37" decoding="async" data-nimg="1" className="rotate-180" src="/icons/pointing-up.png"></Image>
        </a>
      </div>
    </section>
  )
}

export default Welcome