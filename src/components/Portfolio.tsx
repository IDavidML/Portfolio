import React from 'react'
import Header from './Header'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

function Portfolio() {
  return (
    <div id="content" className="px-8 relative flex items-center max-w-[1100px] mx-auto">
      <div className="h-full text-left max-w-full">
        <div className="grid grid-cols-2 gap-2 h-full w-full ">
          <Header/>
          <div className="col-span-1 max-[1000px]:col-span-2 flex flex-col">
            <About/>
            <Experiences/>
            <Projects/>
            <Skills/>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio