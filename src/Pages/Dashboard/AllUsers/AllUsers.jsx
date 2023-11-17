import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/users/${id}`)
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
                <h1 className='text-3xl font-bold'>All Users</h1>
                <h1 className='text-3xl font-bold'>Total Users: {users.length}</h1>
            </div>

            <div className="overflow-x-auto lg:w-3/5 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-amber-700'>
                            <th className='text-white py-4'>#</th>
                            <th className='uppercase text-white py-4'>User Name</th>
                            <th className='uppercase text-white py-4'>User Email</th>
                            {/* <th className='uppercase text-white py-4'>Item Price</th> */}
                            <th className='uppercase text-white py-4'>Action</th>
                            <th className='uppercase text-white py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user.menuId}>
                                <td>{index + 1}</td>
                                <td>
                                    <div>
                                        <div className="font-bold text-base lg:text-lg">{user.name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold text-base lg:text-lg">{user.email}</div>
                                    </div>
                                </td>
                                {/* <td className='text-lg font-semibold text-amber-700'>${user.price}</td> */}
                                <th>
                                    <button className="btn bg-amber-700 btn-square text-white text-2xl"><BiEdit /></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn bg-red-600 btn-square text-white text-2xl"><AiTwotoneDelete /></button>
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

export default AllUsers