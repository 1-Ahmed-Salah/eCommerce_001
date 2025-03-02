import { TCategory } from '@customTypes/category.types'
import React from 'react'
import { Link } from 'react-router'

const Category: React.FC<TCategory> = ({title, prefix, img}) => {
  return (
    <Link to={`products/${prefix}`} className='w-[130px] h-[130px] inline-block'>
      <img 
        src={img} 
        alt={title} 
        className='w-full object-cover rounded-full'  
      />
      <h3 className='text-center mt-2 text-xl font-semibold font-secound'>{title}</h3>
    </Link>
  )
}

export default Category