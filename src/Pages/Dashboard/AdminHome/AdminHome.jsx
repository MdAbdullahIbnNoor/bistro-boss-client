import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaMoneyBillAlt, FaUsers, FaBook, FaShoppingCart } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div>
            <h2 className='text-3xl font-medium mb-10'>
                <span>Hi, Welcome {user?.displayName || 'Back'}</span>
            </h2>
            <div className="grid lg:grid-cols-4 gap-6">
                {/* 1. Revenues Generated */}
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-green-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaMoneyBillAlt size={24} color="green" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Revenues</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">${stats.revenue}</p>
                        {/* Additional revenue-related content */}
                    </div>
                </div>

                {/* 2. Number of Customers */}
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaUsers size={24} color="blue" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Customers</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.users}</p>
                        {/* Additional customer-related content */}
                    </div>
                </div>

                {/* 3. Recipes Available */}
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaBook size={24} color="yellow" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Recipes</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.menuItems}</p>
                        {/* Additional recipe-related content */}
                    </div>
                </div>

                {/* 4. Orders Done */}
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-red-400 to-red-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaShoppingCart size={24} color="red" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Orders</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.orders}</p>
                        {/* Additional order-related content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
