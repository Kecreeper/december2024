import { motion } from "framer-motion"

export default function UnitedFall( { rev } ) {


  return (
    <div className='overflow-hidden font-garamond text-white italic text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
      <ul className='flex flex-nowrap whitespace-nowrap w-fit min-w-full'>
        { 
          Array.from({ length: 10 }, (_, index) => (
            <motion.div animate={{ x: "-100%" }} transition={{
              ease: 'linear', 
              duration: 10, 
              repeat: Infinity,
            }} key={index}>
              UNITED WE STAND, DIVIDED WE FALL <span className="font-eagles not-italic">&nbsp;d&nbsp;</span>
            </motion.div>
          ))
        }
      </ul>
    </div>
  )
}
