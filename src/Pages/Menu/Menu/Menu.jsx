import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import menuBanner from '../../../assets/menu/banner3.jpg';
import menuDessert from '../../../assets/menu/dessert-bg.jpeg';
import menuPizza from '../../../assets/menu/pizza-bg.jpg';
import menuSalad from '../../../assets/menu/salad-bg.jpg';
import menuSoup from '../../../assets/menu/soup-bg.jpg';


const Menu = () => {
    
    const [menu] = useMenu();
    const dessert = menu?.filter(item => item.category === 'dessert')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const salad = menu?.filter(item => item.category === 'salad')
    const soup = menu?.filter(item => item.category === 'soup')
    const offered = menu?.filter(item => item.category === 'offered')

    return (
        <div className='space-y-20 mb-20 font-serif'>

            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            <Cover image={menuBanner} title={"Our Menu"} paragraph={"Would you like to try a dish?"}></Cover>
            <MenuCategory items={offered} titleOpen={true}></MenuCategory>
            <Cover image={menuDessert} title={"DESSERTS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={dessert} title={"dessert"} titleOpen={false}></MenuCategory>
            <Cover image={menuPizza} title={"PIZZA"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={pizza} title={"pizza"} titleOpen={false}></MenuCategory>
            <Cover image={menuSalad} title={"SALADS"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={salad} title={"salad"} titleOpen={false}></MenuCategory>
            <Cover image={menuSoup} title={"SOUP"} paragraph={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
            <MenuCategory items={soup} title={"soup"} titleOpen={false}></MenuCategory>
        </div>
    )
}

export default Menu