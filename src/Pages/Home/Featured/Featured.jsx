import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featured from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="hero min-h-[700px] my-24 bg-fixed" style={{ backgroundImage: `url(${featured})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-full text-white">
                    <SectionTitle
                        subHeading={"-----Check it out-----"}
                        heading={"FROM OUR MENU"}
                        textColor = {"text-white"}
                    ></SectionTitle>

                    <div className="hero w-3/4 mx-auto">
                        <div className="hero-content flex-col lg:flex-row gap-10">
                            <img src={featured} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className='text-left'>
                                <h1 className="text-xl">March 20, 2023</h1>
                                <h1 className="text-xl">WHERE CAN I GET SOME?</h1>
                                <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                                <button className="btn bg-transparent text-white border-0 border-b-4 border-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured