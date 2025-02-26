import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface IPaginationState {
    count: number,
    handlePagination: (page: number) => void
}

const Pagination: React.FC<IPaginationState> = ({ count, handlePagination }) => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        handlePagination(page)
    }

    return (
        <div className="mt-8 flex w-full justify-left">
            <ol className="flex justify-center gap-1 text-xs font-medium">
                <li>
                    <button
                        className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-800 bg-zinc-800  cursor-pointer hover:opacity-80 duration-300"
                        onClick={()=> handlePageChange(Math.max(1, currentPage - 1))}
                    >
                        <span className="sr-only">Prev Page</span>
                        <ChevronLeft size={19} />
                    </button>
                </li>

                
                {[...Array(count)].fill(0).map((_, index) => (
                    <li key={index}>
                    <button
                        className={`block size-8 rounded-sm border border-gray-800  text-center leading-8 cursor-pointer hover:opacity-80 duration-300 ${currentPage === index + 1&& 'bg-zinc-700'}`}
                        onClick={()=> handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                </li>
                ))}
                

                <li>
                    <button 
                        className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-800 bg-zinc-800  cursor-pointer hover:opacity-80 duration-300"
                        onClick={()=> handlePageChange(Math.min(count, currentPage + 1))}
                    >
                        <span className="sr-only">Next Page</span>
                        <ChevronRight size={19} />
                    </button>
                </li>
            </ol>
        </div>
    )
}

export default Pagination