import { Category } from '@components/eCommerce'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { thunkGetCategories } from '@store/slices/categoriesSlice/categoriesSlice';
import { useEffect } from 'react';


const Categories = () => {

  const dispatch = useAppDispatch()
  const { records, loading, error } = useAppSelector(state => state.categories);

  useEffect(()=> {
    dispatch(thunkGetCategories())
    console.log(records)
  }, [dispatch])

  const categoriesList = records.length > 0? records.map(record => <Category key={record.id} {...record} />) : 'There are no categories'
  return (
    <section className='section'>
      <div className="container">
        <div className='mt-10'>
          <h2 className='text-2xl font-secound text-center'>Categories</h2>
          {/* categories */}
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
            {categoriesList}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories