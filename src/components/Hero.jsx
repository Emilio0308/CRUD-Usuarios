import React from 'react'
import "./Hero.css"

const Hero = () => {


  return (
    <section className='w-[100%] h-screen grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-[0] bg-black bg-[url(/heroImage.jpeg)]  bg-center bg-cover bg-no-repeat bg-fixed'>
        <div className='w-[100%] row-start-1 row-end-2 relative overflow-hidden sm:min-h-screen'>
            <img className='object-cover w-[100%] h-[100%] saturate-50 ' src="/heroImage.jpeg" alt="" />
            <div className='orb absolute'></div>
        </div>
        <div className='p-12 flex justify-center items-center sm:min-h-screen bg-black bg-opacity-90'>
            <article className='text-white w-[100%] h-[100%] border-[2px] border-indigo-500 p-3 flex flex-col justify-center items-center gap-4'>
                <h3 className='font-bold'>BIENVENIDO</h3>
                <p>Crea y organiza los usuarios que desees</p>
                <a href="#header"><button className='w-[150px] bg-cyan-800 p-2'>ir</button></a>
            </article>
        </div>
    </section>
  )
}

export default Hero