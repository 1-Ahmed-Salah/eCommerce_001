import { useRouteError, isRouteErrorResponse } from 'react-router'
import { Link } from 'react-router'

const Error = () => {

  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if(isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = 'Page not found'; 
  }

  return (
    <div className='grid h-screen place-content-center  px-4'>
        <h2 className="tracking-widest text-gray-500 uppercase dark:text-gray-400" >{errorStatus} | {errorStatusText}</h2>
        <Link
            to='/'
            className="mt-6 inline-block rounded-sm bg-gradient-to-r from-purple-500 to-pink-400 px-5 py-3 text-sm font-medium text-center text-white hover:bg-purple-700 duration-300 focus:ring-3 focus:outline-hidden w-[200px] mx-auto hover:opacity-90"
            replace={true}
        >
            Go Back Home
        </Link>
    </div>
  )
}

export default Error