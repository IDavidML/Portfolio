import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TransporteDelSur() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-5xl font-semibold mb-8 text-center'>Transporte del Sur</h1>
      <p className='py-2'>Aplicación creada para Android, en la cual podrás consultar con mayor facilidad las líneas interurbanas disponibles en tu provincia (Solo en la comunidad autónoma de Andalucía).</p>
      <p className='py-2'>Dentro de cada línea, podrás consultar sus horarios de ida y vuelta. Con sus horas aproximadas de llegada a cada parada. Además con el mapa interactivo podrás ver la ruta que sigue esta línea.</p>
      <p className='py-2'>Podrás ver en cada sección individual, las tarifas existentes, paradas y puestos de venta/recarga cercanos mediante el mapa interactivo</p>
      <p className='py-2'>Por último, consulta el saldo de su tarjeta de transporte usando la tecnología NFC!</p>
      <Link href={'https://play.google.com/store/apps/details?id=com.github.davidml16.autobusesdelabahia'} className='w-full flex justify-center'>
        <Image className='my-4' alt='Google Play' src={'/google-play-badge.png'} width={300} height={100}/>
      </Link>
      <div className='grid grid-cols-4 my-8 gap-4'>
        {
          Array.from(Array(7), (e, i) => {
            return <Image key={i} alt={`Imagen ${i}`} src={`/projects/transporte-del-sur/image${i}.jpg`} width={267} height={534} />
          })
        }
      </div>
    </div>
  )
}

export default TransporteDelSur