import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <div className='flex gap-1 bg-gradient-to-l from-red-600 to-blue-600 rounded-full font-garamond font-bold text-lg p-1 my-4 max-w-xs mx-auto text-center'>
                <Link to={'/'} className='grow px-2 py-4 rounded-l-full bg-black/25 shadow-black backdrop-blur-lg text-white'>
                    Belligerents
                </Link>
                <Link to={'/documents'} className='grow px-2 py-4 rounded-r-full bg-black/25 shadow-black backdrop-blur-lg text-white'>
                    Documents
                </Link>
            </div>
        </>
    )
}

export default Navigation