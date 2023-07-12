import React from 'react'

function Footer() {
  return (
    <footer className="pt-9 pb-16 w-full">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&amp;>a]:text-orange-800 dark:[&amp;>a]:text-orange-50 dark:hover:[&amp;>a]:text-cyan-500 hover:[&amp;>a]:text-cyan-700">
          Diseñado libremente en Adobe Illustrator y codificado en Visual Studio Code por su servidor. Construido con Next.js y Tailwind CSS, implementado con Vercel. Todo el texto se establece en el tipo de letra Inter.
        </p>
      </div>
    </footer>
  )
}

export default Footer