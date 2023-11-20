import React from 'react'
import useCart from '../../../hooks/useCart';
// import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err))
            }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly px-20 mt-8 mb-4'>
                <h1 className='text-3xl font-bold'>Items: {cart.length}</h1>
                <h1 className='text-3xl font-bold'>Total Price: {totalPrice}</h1>
                {
                  cart.length ? <Link to='/dashboard/payment'>
                        <button className="btn bg-amber-700 text-white">Pay</button>
                    </Link> 
                    : <button disabled className="btn bg-amber-700 text-white">Pay</button>

                }
            </div>

            <div className="overflow-x-auto lg:w-3/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-amber-700'>
                            <th className='text-white py-4'>#</th>
                            <th className='uppercase text-white py-4'>Item Image</th>
                            <th className='uppercase text-white py-4'>Item Name</th>
                            <th className='uppercase text-white py-4'>Item Price</th>
                            {/* <th className='uppercase text-white py-4'>Action</th> */}
                            <th className='uppercase text-white py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item.menuId}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-square w-10 md:w-16 h-10 md:h-16">
                                                <img src={item.image} alt="{item.name}" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold text-base lg:text-lg">{item.name}</div>
                                    </div>
                                </td>
                                <td className='text-lg font-semibold text-amber-700'>${item.price}</td>
                                {/* <th>
                                    <button className="btn bg-amber-700 btn-square text-white text-2xl"><BiEdit/></button>
                                </th> */}
                                <th>
                                    <button onClick={() => handleDeleteItem(item._id)} className="btn bg-red-600 btn-square text-white text-2xl"><AiTwotoneDelete /></button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Cart