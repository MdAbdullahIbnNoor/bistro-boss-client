import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import pic1 from '../../../assets/home/slide1.jpg'
import pic2 from '../../../assets/home/slide2.jpg'
import pic3 from '../../../assets/home/slide3.jpg'

const CardSection = () => {
    return (
        <div className='my-24'>
            <SectionTitle subHeading={"---Should Try---"} heading={"CHEF RECOMMENDS"}></SectionTitle>

            <div className='grid md:grid-cols-3 gap-5 px-8 mx-auto'>
                {/* card 1 */}
                <div className="max-w-md rounded-md shadow-md bg-gray-200">
                    <img src={pic1} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracki text-gray-800 text-center">Donec lectus leo</h2>
                            <p className=" text-gray-800 text-center">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="btn bg-transparent hover:bg-gray-800 text-amber-600 text-base border-0 border-b-4 border-gray-800 shadow-xl text-center w-3/4 mx-auto">View Full  Menu</button>
                    </div>
                </div>

                {/* card 2 */}
                <div className="max-w-md rounded-md shadow-md bg-gray-200">
                    <img src={pic2} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracki text-gray-800 text-center">Donec lectus leo</h2>
                            <p className=" text-gray-800 text-center">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="btn bg-transparent hover:bg-gray-800 text-amber-600 text-base border-0 border-b-4 border-gray-800 shadow-xl text-center w-3/4 mx-auto">View Full  Menu</button>
                    </div>
                </div>

                {/* card 3 */}
                <div className="max-w-md rounded-md shadow-md bg-gray-200">
                    <img src={pic3} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracki text-gray-800 text-center">Donec lectus leo</h2>
                            <p className=" text-gray-800 text-center">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                        </div>
                        <button className="btn bg-transparent hover:bg-gray-800 text-amber-600 text-base border-0 border-b-4 border-gray-800 shadow-xl text-center w-3/4 mx-auto">View Full  Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection