import UnitedFall from './components/UnitedFall.jsx'

function App() {

  return (
    <>
      <div className='bg-black absolute max-w-full'>
        <UnitedFall />
      </div>
      <div className='font-garamond grid place-items-center grid-cols-3 grid-rows-1 min-h-screen'>
        <div className='grid grid-cols-1 justify-items-center ring text-white'>
          <div className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl'>
            Sons Of Liberation
          </div>
          <img
            src='src/assets/LCflag.png'
            className='max-w-xs '
          />
          <div className='text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl'>
            Union of Liberation
          </div>
        </div>
        <img className='ring w-fit h-fit' src='src/assets/MClogo2.png'/>
      </div>
      
    </>
  );
}

export default App