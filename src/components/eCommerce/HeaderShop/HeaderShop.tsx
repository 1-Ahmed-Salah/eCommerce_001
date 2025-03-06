import { useAppSelector } from '@store/hooks'
import { getCartTotalQuantitySelector } from '@store/slices/cartSlice/selector';
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react';

const HeaderShop = () => {

    const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
    const [isAnimate, setIsAnimate] = useState<boolean>(false);

    useEffect(()=> {
        setIsAnimate(true);
        const debounce = setTimeout(()=> {
            setIsAnimate(false);
        }, 300)

        return ()=> clearTimeout(debounce);
    }, [totalQuantity])
    
    return (
        <div className='relative'>
            <span className={`absolute -top-3.5 -right-3 text-[13px] font-semibold w-[18px] h-[18px] bg-red-500 rounded-full ${totalQuantity > 0? 'grid': 'hidden'}  place-content-center ${isAnimate && 'animate-pumping'}`}>
                {totalQuantity}
            </span>
            <ShoppingCart className="relative cursor-pointer text-gray-300 hover:text-white duration-300" width={22}/>
        </div>
    )
}

export default HeaderShop