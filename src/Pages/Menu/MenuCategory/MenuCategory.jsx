import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, titleOpen }) => {
    return (
        <div>
            {titleOpen && (
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"} />
            )}
            <div className='grid md:grid-cols-2 gap-4 my-24 mx-24'>
                {
                    items?.length >= 8 ?
                        items?.slice(1, 9).map((item) => (
                            <MenuItem key={item._id} item={item}></MenuItem>
                        )) : items?.map((item) => (
                            <MenuItem key={item._id} item={item}></MenuItem>
                        ))
                }
            </div>
            <div className='flex justify-center'>
                <Link to={`/order/${title}`}>
                    <button className="btn bg-transparent text-gray-800 text-base border-0 border-b-4 border-gray-600 shadow-xl text-center">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
