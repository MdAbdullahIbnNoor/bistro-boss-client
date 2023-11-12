import React from 'react'

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (

        <div className='flex gap-2 w-9/12'>
            <img src={image} className="w-20 rounded-full rounded-tl-none  mr-4" />
            <div>
                <h3 className='font-semibold text-gray-700 text-lg'>{name}-----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-amber-600 font-semibold'>${price}</p>
        </div>
    )
}

export default MenuItem