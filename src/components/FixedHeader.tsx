import Link from 'next/link'
import React from 'react'

function FixedHeader() {
  return (
    <nav className='fixed top-8 w-full z-50 px-4'>
      <div className='rounded-xl max-w-[1100px] mx-auto w-fit px-4 h-14 flex place-items-center place-content-center bg-white/20 backdrop-blur-md'>
        <div className='flex place-items-center sm:gap-8 gap-4 [&>a]:text-sm sm:[&>a]:text-lg'>
          <Link className='text-white sm:text-white/80 hover:text-white' href={'/'}>Inicio</Link>
          <Link className='text-white sm:text-white/80 hover:text-white' href={'/proyectos'}>Proyectos</Link>
          <Link className='text-white sm:text-white/80 hover:text-white' href={'/contacto'}>Contacto</Link>
          <Link className='text-white sm:text-white/80 hover:text-white' href={'/curriculum'}>Currículum</Link>
        </div>
      </div>
    </nav>
  )
}

export default FixedHeader