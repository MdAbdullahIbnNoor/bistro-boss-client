import React from 'react'

const FoodCard = ({item}) => {
    const {image, recipe, name, price} = item
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='relative' /></figure>
                <p className='btn-sm bg-gray-800 absolute top-5 right-5 text-white font-medium py-1'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-center">{name}</h2>
                    <p >{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-transparent hover:bg-gray-800 text-amber-600 text-base border-0 border-b-4 border-gray-800 shadow-xl text-center w-3/4 mx-auto uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard