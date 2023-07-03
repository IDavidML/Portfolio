import React from 'react'

function Footer() {
  return (
    <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-left font-extrabold text-2xl tracking-tighter dark:text-white">
            <div className="flex gap-2 font-medium dark:text-neutral-400 text-neutral-800 text-xs">
              <span>d</span>
              <span>e</span>
              <span>s</span>
              <span>d</span>
              <span>e</span>
            </div>
            <a href="https://es.wikipedia.org/wiki/España" target="_blank" className="hover:underline" title='Spain'>España</a>
          </h4>
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&amp;>a]:text-orange-800 dark:[&amp;>a]:text-orange-50 dark:hover:[&amp;>a]:text-cyan-500 hover:[&amp;>a]:text-cyan-700">
            Diseñado libremente en Adobe Illustrator y codificado en Visual Studio Code por su servidor. Construido con Next.js y Tailwind CSS, implementado con Vercel. Todo el texto se establece en el tipo de letra Inter.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer