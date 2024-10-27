import { motion } from "framer-motion"

export default function UnitedFall() {
  return (
    <div className='overflow-hidden font-garamond text-white italic text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
      <ul className='flex flex-nowrap whitespace-nowrap w-fit min-w-full'>
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
  )
}
