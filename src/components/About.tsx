import React from 'react'

function About() {
  return (
    <section id="sobre-mi" className="pt-24 max-[1000px]:pt-0">
      <h3 className="text-2xl max-[1000px]:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-blue-400 text-black/80">About</h3>
      <div className="dark:text-blue-100 text-neutral-900">
        <p className="mb-4 leading-6 text-base pt-4">
          Soy un desarrollador web y de software especializado en PHP, HTML, CSS y JavaScript. También tengo experiencia en el desarrollo de aplicaciones usando Java. Mi enfoque es crear soluciones digitales eficientes y atractivas mediante la combinación de tecnologías modernas y las mejores prácticas de desarrollo.<br/><br/>Me apasiona convertir ideas en productos funcionales y adaptables, brindando experiencias de usuario excepcionales.
        </p>
      </div>
    </section>
  )
}

export default About