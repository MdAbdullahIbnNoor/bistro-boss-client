import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin from the database
    const [isAdmin] = useAdmin();
    return (
        <div className='flex py-16 '>
            <div className="w-64 min-h-[850px] bg-amber-500">
                {/* side bar */}
                <ul className='menu '>
                    {
                        isAdmin ? <>
                            <li className='px-3 py-2 text-lg font-medium'>
                                <NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink>
                            </li>
                            <li className='px-3 py-2 text-lg font-medium'>
                                <NavLink to='/dashboard/addItems'><ImSpoonKnife />Add Items</NavLink>
                            </li>
                            <li className='px-3 py-2 text-lg font-medium'>
                                <NavLink to='/dashboard/manageItems'><FaList /> Manage Items</NavLink>
                            </li>
                            <li className='px-3 py-2 text-lg font-medium'>
                                <NavLink to='/dashboard/bookings'><FaBook/> Manage Bookings</NavLink>
                            </li>
                            <li className='px-3 py-2 text-lg font-medium'>
                                <NavLink to='/dashboard/users'><FaUsers /> All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li className='px-3 py-2 text-lg font-medium'>
                                    <NavLink to='/dashboard/userHome'><FaHome /> User Home</NavLink>
                                </li>
                                <li className='px-3 py-2 text-lg font-medium'>
                                    <NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink>
                                </li>
                                <li className='px-3 py-2 text-lg font-medium'>
                                    <NavLink to='/dashboard/cart'><BsCart3 /> My Cart({cart.length})</NavLink>
                                </li>
                                <li className='px-3 py-2 text-lg font-medium'>
                                    <NavLink to='/dashboard/review'><FaAd /> Add a Review</NavLink>
                                </li>
                                <li className='px-3 py-2 text-lg font-medium'>
                                    <NavLink to='/dashboard/bookings'><FaList /> My Bookings</NavLink>
                                </li>
                            </>
                    }

                    {/* Shered links */}
                    <div className='divider px-4'></div>

                    <li className='px-3 py-2 text-lg font-medium'>
                        <NavLink to='/'><FaHome />Home</NavLink>
                    </li>
                    <li className='px-3 py-2 text-lg font-medium'>
                        <NavLink to='/order/salad'><FaSearch />Menu</NavLink>
                    </li>
                    <li className='px-3 py-2 text-lg font-medium'>
                        <NavLink to='/order/contact'><FaEnvelope />Contact</NavLink>
                    </li>
                    <li className='px-3 py-2 text-lg font-medium'>
                        <NavLink to='/order/salad'><FaSearch />Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 px-16 py-10 bg-amber-50">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard