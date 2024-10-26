import { useState } from 'react'
import { motion } from "framer-motion"

function App() {


  return (
    <>
      <div className='bg-black'>
        <div className='overflow-hidden whitespace-nowrap bg-grey font-garamond text-white italic text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
          <ul className='flex flex-nowrap w-fit min-w-full drop-shadow-xl'>
            { 
              Array.from({ length: 10 }, (_, index) => (
                <motion.div animate={{ x: "-100%" }} transition={{
                  ease: 'linear', 
                  duration: 10, 
                  repeat: Infinity,
                }} key={index}>
                  UNITED WE STAND, DIVIDED WE FALL &nbsp; ★ &nbsp;
                </motion.div>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
