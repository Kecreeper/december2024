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
            <div className="grid grid-cols-5 gap-6 max-w-[90%] mx-auto place-items-center h-screen font-garamond">
                <div className="bg-white/15 backdrop-blur-lg text-white rounded-3xl p-3 flex flex-col">
                    <img onClick={goToImg} className="max-h-screen rounded-[15px]" src='.\docs\SonsOfLiberationOrdinanceOfSecession.png'/>
                    <div className="text-center pb-1 pt-2 text-lg font-bold">
                        Ordinance of Secession, <span className="italic font-normal"> Union of Liberation. </span>
                    </div>
                    <div className="text-center pb-1 text-lg text-gray-400">
                        "Why everything that's supposed to be bad make me feel so good?"
                    </div>
                    <div className="px-1 pb-1 text-gray-400/75">
                        <span className='font-eagles'>a</span> October 26, 2024.
                    </div>
                </div>
                <div className="bg-white/15 backdrop-blur-md text-white rounded-3xl p-3 flex flex-col">
                    <img onClick={goToImg} className="max-h-screen rounded-[15px]" src='.\docs\Iowa.png'/>
                    <div className="text-center pb-1 pt-2 text-lg font-bold">
                        Shocking Iowa Poll, <span className="italic font-normal"> Des Moines Register. </span>
                    </div>
                    <div className="text-center pb-1 text-lg text-gray-400">
                        "Can you feel the light, inside? Can you feel that fire?"
                    </div>
                    <div className="px-1 pb-1 text-gray-400/75">
                        <span className='font-eagles'>a</span> November 2, 2024.
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