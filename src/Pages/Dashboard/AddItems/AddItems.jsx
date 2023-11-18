import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {

        // image upload to imgbb and then get an url
        const imageFile = {
            image: data.image[0]
        }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    };

    return (
        <div>
            <SectionTitle heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></SectionTitle>
            <div className='mx-24 bg-gray-200 p-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-7">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Recipe Name*</label>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            className="mt-1 p-3 w-full bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex space-x-4 mb-7">
                        <div className="w-1/2">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category*</label>
                            <select
                                {...register('category', { required: true })}
                                className="mt-1 p-3 w-full bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            >
                                <option disabled value="default">Select an option</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price*</label>
                            <input
                                type="number"
                                {...register('price', { required: true, min: 0, step: 0.01 })}
                                className="mt-1 p-3 w-full bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="mb-7">
                        <label htmlFor="recipe" className="block text-sm font-medium text-gray-700">Recipe Details*</label>
                        <textarea
                            {...register('recipe', { required: true })}
                            rows="4"
                            className="mt-1 p-3 w-full bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div className="mb-7">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register('image')}
                            className="mt-1 p-3 w-full bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-8">
                        <button
                            type="submit"
                            className="btn flex items-center bg-amber-700 text-white px-4 py-3 rounded-md hover:bg-amber-500 hover:text-gray-200"
                        >
                            <span>Add Item</span>
                            <FaUtensils className='text-lg'></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
