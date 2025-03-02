import { TProduct } from "@customTypes/product.type"
import { Link } from "react-router"

const Product: React.FC<TProduct> = ({ title, img, price }) => {
  return (
    <Link 
      to='#'
      className="space-y-3 border border-white/20 rounded p-4 inline-block"
    >
      <img 
        src={img} 
        alt={title}
        className="w-full rounded mx-auto relative z-20" 
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-[18px] font-medium font-secound">
          ${price}
        </p>
        <button
          className="bg-purple-500 py-2 px-3 text-center w-full rounded cursor-pointer hover:scale-105 duration-300 ease-in-out font-secound"
        >
          Add to cart
        </button>
      </div>
    </Link>
  )
}

export default Product