import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu();

    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = item => {
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
                axiosSecure.delete(`/menu/${item._id}`)
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
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"}></SectionTitle>
            <div className='flex justify-start px-20 mt-8 mb-4'>
                <h1 className='text-3xl font-bold ml-10'>Total Items: {menu?.length}</h1>
            </div>

            <div className="overflow-x-auto lg:w-4/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-amber-700'>
                            <th className='text-white py-4'>#</th>
                            <th className='uppercase text-white py-4'>Image</th>
                            <th className='uppercase text-white py-4'>Item Name</th>
                            <th className='uppercase text-white py-4'>Price</th>
                            <th className='uppercase text-white py-4'>Update</th>
                            <th className='uppercase text-white py-4'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            menu.map((item, index) =>
                                <tr key={item._id}>
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
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn bg-amber-700 btn-square text-white text-2xl"><BiEdit /></button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteItem(item)} className="btn bg-red-600 btn-square text-white text-2xl"><AiTwotoneDelete /></button>
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

export default ManageItems