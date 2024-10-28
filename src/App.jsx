import UnitedFall from './components/UnitedFall.jsx'

function App() {

  return (
    <>
      <div className='bg-black absolute max-w-full'>
        <UnitedFall />
      </div>
      <div className='font-garamond text-gray-300 whitespace-nowrap grid grid-cols-3 grid-rows-1 place-items-center min-h-screen'>
        <div className='z-10 grid grid-cols-1 justify-items-center'>
          <div className='drop-shadow-md m-4 font-bold text-md xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
            Sons of Liberty
          </div>
          <img className='flagleft max-w-[150px] xs:max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl' src='./assets/UoLflag.png' />
          <div className='drop-shadow-md text-gray-400 m-4 text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
            Union of Liberation
          </div>
        </div>
        <img className='w-fit h-fit' src='./assets/MClogo2.png'/>
        <div className='z-10 grid grid-cols-1 justify-items-center'>
          <div className='drop-shadow-md m-4 font-bold text-md xs:text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
            Westward Radicans
          </div>
          <img className='flagright max-w-[150px] xs:max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl' src='./assets/USRflag.png'/>
          <div className='drop-shadow-md text-gray-400 m-4 text-sm xs:text-md sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
            United States of Radboy
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App