import { TProduct } from "@customTypes/product.type"
import { Link } from "react-router"
import { Heart } from "lucide-react"
import { useAppDispatch } from "@store/hooks"
import { addToCart } from "@store/slices/cartSlice/cartSlice"
import { memo, useEffect, useState } from "react"
import { Spinner } from "@components/feedback"
import toast from "react-hot-toast"

const Product: React.FC<TProduct> = memo(({ id, title, img, price, max, quantity }) => {

  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);

  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity == 0? true : false;

  const addToCartHandler = ()  =>{
    dispatch(addToCart(id))
    toast.success('Product added to cart.')
    setIsBtnDisabled(true);
    
    
  }

  useEffect(()=> {

    if(!isBtnDisabled) {
      return
    }

    if(currentRemainingQuantity == 0) {
      toast.error('You’ve reached the maximum quantity allowed for this product.', {
        duration: 6000
      })
    } 

    const debounce = setTimeout(()=> {
      setIsBtnDisabled(false);
    }, 300)
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  return (
    <Link 
      to='#'
      className="space-y-3 border border-white/20 rounded p-4 inline-block "
    >
      <img 
        src={img} 
        alt={title}
        className="w-full rounded mx-auto relative z-20" 
      />
      <div className="space-y-3">
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-[15px] font-medium font-secound">
            ${price}
          </p>
          <p className="text-gray-400 text-[14px] font-medium font-secound">
          Remaining Quantity: <span className="text-[16px] font-medium"> {currentRemainingQuantity}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`bg-purple-500 py-2 px-3 text-center w-full rounded cursor-pointer hover:scale-105 duration-300 ease-in-out font-secound text-[14px] font-semibold ${isBtnDisabled || quantityReachedToMax && 'opacity-50 hover:cursor-not-allowed'}`}
            onClick={addToCartHandler}
            disabled={isBtnDisabled || quantityReachedToMax}
          >
            {
              isBtnDisabled? <div className="flex items-center justify-center gap-2 "><Spinner /> Loading</div> : 'Add to Cart'
            }
          </button>
          <div className="bg-zinc-800 h-[37px] p-1 grid place-content-center rounded  hover:bg-zinc-900 duration-300 border border-white/10">
            <Heart 
              absoluteStrokeWidth 
              width={30}
              
              className="cursor-pointer hover:scale-110 duration-300" 
                
            />
          </div>
        </div>
        {
          quantityReachedToMax && <p className="text-sm text-red-500 font-medium">
            
          </p>
        }
      </div>
    </Link>
  )
})

export default Product