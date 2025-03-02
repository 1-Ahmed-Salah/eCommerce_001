import { GridList } from '@components/common';
import { Category } from '@components/eCommerce'
import { Loading } from '@components/feedback';
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { thunkGetCategories } from '@store/slices/categoriesSlice/categoriesSlice';
import { useEffect } from 'react';


const Categories = () => {

  const dispatch = useAppDispatch()
  const { records, loading, error } = useAppSelector(state => state.categories);

  useEffect(()=> {
    if(!records.length) {
      dispatch(thunkGetCategories())
    }
  }, [dispatch])

  
  return (
    <section className='section'>
      <div className="container">
        <div className='mt-10'>
          <h2 className='text-2xl font-secound text-center'>Categories</h2>
          {/* categories */}
          <Loading status={loading} error={error}>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  space-y-14 space-x-6 sm:gap-2 justify-items-center'>
              <GridList records={records} renderItem={(record)=> <Category {...record} />} />
            </div>
          </Loading>
        </div>
      </div>
    </section>
  )
}

export default Categories;