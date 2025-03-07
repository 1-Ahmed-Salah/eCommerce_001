import { Product } from "@components/eCommerce";
import Pagination from "@components/eCommerce/Pagination/Pagination";
import { Loading } from "@components/feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { thunkGetProducts } from "@store/slices/productsSlice/thunk/thunkGetProducts";
import { useEffect, useState } from "react";

const Home = () => {

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(state => state.products);
  const cartItems = useAppSelector(state => state.cart.items)
  const productFullInfo = records.map(record => ({
    ...record,
    quantity: cartItems[record.id as number] || 0,
  }))


  const pageSize = 8;
  const countPages = Math.ceil(records.length / pageSize)
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  })

  const handlePagination = (page: number) => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setPagination({...pagination, from, to});
  }

  useEffect(()=> {
    dispatch(thunkGetProducts());
  }, [dispatch])

  const productsList = productFullInfo.length > 0? productFullInfo.slice(pagination.from, pagination.to).map(record => <Product key={record.id} {...record} />) : 'There are no products'

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-y-6">
          {/* banner */}
          <div className="mt-10 relative h-[650px] rounded-2xl overflow-hidden">
            <img 
              src="banner.jpg" 
              alt="banner-img"
              className="absolute z-10 h-[650px] w-full  object-cover rounded-2xl" 
            />

            <div className="relative z-20 h-full w-full inset-0 bg-black/40 grid place-content-center">
              <h1 
                className='text-center text-3xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent mb-5 font-secound'
              >Discover Your Style</h1>
              <p
                className='text-gray-300 text-center md:text-[18px]  mb-6 text-[17px] md:text-lg font-secound'
              >
                Shop the latest trends and find your perfect look
              </p>
              <button
                className='w-[180px] py-3 bg-gradient-to-r from-pink-600 to-purple-500 mx-auto font-secound rounded cursor-pointer hover:from-pink-500 hover:to-purple-400 transition-colors duration-300'
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* multi banner 1*/}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative h-[250px] overflow-hidden rounded-2xl">
              <img 
                src="banner1.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  New Arrivals
                </h3>
                <button className="w-[120px] bg-gradient-to-r from-pink-600 to-purple-500 py-2 rounded cursor-pointer">
                  Discover
                </button>
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden rounded-2xl">
              <img 
                src="banner2.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  Limited Offer
                </h3>
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden rounded-2xl col-span-1 sm:col-span-2">
              <img 
                src="banner3.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-1">
                  Season Sale
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  Up to 70% Off
                </p>
                <button className="w-[120px] mx-atuo bg-gradient-to-r from-pink-600 to-purple-500 py-2 rounded cursor-pointer">
                  Shop now
                </button>
              </div>
            </div>

          </div>

          {/* multi banner 2*/}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative h-[250px] overflow-hidden rounded-2xl col-span-1 sm:col-span-2">
              <img 
                src="banner4.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-1">
                  Season Sale
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  Up to 70% Off
                </p>
                <button className="w-[120px] mx-auto bg-gradient-to-r from-pink-600 to-purple-500 py-2 rounded cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden rounded-2xl">
              <img 
                src="banner5.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  Limited Offer
                </h3>
              </div>
            </div>

            <div className="relative h-[250px] overflow-hidden rounded-2xl">
              <img 
                src="banner6.jpg" 
                alt="" 
                className="h-full w-full object-cover "
              />

              <div className="absolute z-30  inset-0 bg-black/40 grid place-content-center">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  New Arrivals
                </h3>
                <button className="w-[120px] mx-auto bg-gradient-to-r from-pink-600 to-purple-500 py-2 rounded cursor-pointer">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* all products */}
        <div className="py-20">
          <h2 className="text-2xl font-secound text-center ">Products</h2>
          <Loading status={loading} error={error}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
              {
                productsList
              }
            </div>
            <Pagination count={countPages} handlePagination={handlePagination} />
          </Loading>
        </div>

        <div>
        </div>
      </div>
    </section>
  )
}

export default Home