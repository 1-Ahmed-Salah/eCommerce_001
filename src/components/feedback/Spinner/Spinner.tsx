import { LoaderCircle } from 'lucide-react'

const Spinner = () => {
  return (
    <span >
        <LoaderCircle className='animate-spin ' size={18} />
    </span>
  )
}

export default Spinner