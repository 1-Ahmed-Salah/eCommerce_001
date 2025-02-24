import { Product } from "@components/eCommerce"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { productsCleanUp, thunkGetProductsByPrefix } from "@store/slices/productsSlice/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router";

const Products = () => {

  const {prefix} = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(state => state.products);

  useEffect(()=> {
    dispatch(thunkGetProductsByPrefix(prefix as string))

    return () => {
      dispatch(productsCleanUp());
    }
  }, [dispatch, prefix])

  const productsList = records.length > 0? records.map(record => <Product key={record.id} {...record} />) : 'There are no products'

  return (
    <section className='section'>
      <div className="container">
        <div className='mt-10'>
          <h2 className='text-2xl font-secound '>Products: <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent text-xl -skew-3 inline-block">{prefix}</span></h2>
          {/* Products */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsList}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products