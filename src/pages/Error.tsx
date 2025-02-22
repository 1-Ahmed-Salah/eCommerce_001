
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='grid h-screen place-content-center  px-4'>
        <h2 className="tracking-widest text-gray-500 uppercase dark:text-gray-400" >404 | Not Found</h2>
        <Link
            to='/'
            className="mt-6 inline-block rounded-sm bg-gradient-to-r from-purple-500 to-pink-400 px-5 py-3 text-sm font-medium text-white hover:bg-purple-700 duration-300 focus:ring-3 focus:outline-hidden"
            replace={true}
        >
            Go Back Home
        </Link>
    </div>
  )
}

export default Error