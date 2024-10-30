import Navigation from "./components/Navigation"
import UnitedFall from "./components/UnitedFall"
// const images = Object.values(import.meta.glob('./docs/*.{png,jpg}', { eager: true, query: '?url', import: 'default' }));

function Documents() {
    const goToImg = (img) => {
        window.location.href = (img.nativeEvent.srcElement.src);
    }
    
    return(
        <>
            <div className='bg-black fixed top-0 max-w-full'>
                <UnitedFall />
            </div>
            <div className="grid grid-cols-5 max-w-[90%] mx-auto place-items-center h-screen font-garamond">
                <div className="bg-white/15 backdrop-blur-md text-white rounded-3xl p-3 flex flex-col">
                    <img onClick={goToImg} className="max-h-screen rounded-[15px]" src='.\docs\SonsOfLiberationOrdinanceOfSecession.png'/>
                    <div className="text-center pb-1 pt-2 text-lg font-bold">
                        Ordinance of Secession, <span className="italic font-normal"> Union of Liberation. </span>
                    </div>
                    <div className="px-1 pb-1 text-gray-400/75">
                        <span className='font-eagles'>a</span> October 26, 2024.
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 max-w-full'>
                <Navigation />
                <div className='bg-black'>
                <UnitedFall />
                </div>
            </div>
        </>
    )
}

export default Documents