import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState();
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Popular Items---"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-2 my-24 mx-20'>
                {
                    menu?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>
                    )
                }
            </div>
            <div className=' flex justify-center'>
                <button className="btn bg-transparent text-gray-800 text-base border-0 border-b-4 border-gray-600 shadow-xl text-center">View Full  Menu</button>
            </div>

        </section>
    )
}

export default PopularMenu