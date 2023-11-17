import React, { useContext } from 'react'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, recipe, name, price, _id } = item
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart to update the cart
                        refetch();

                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please Log In to Add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className='relative' /></figure>
                <p className='btn-sm bg-gray-800 absolute top-5 right-5 text-white font-medium py-1'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-center">{name}</h2>
                    <p >{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn bg-transparent hover:bg-gray-800 text-amber-600 text-base border-0 border-b-4 border-gray-800 shadow-xl text-center w-3/4 mx-auto uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard