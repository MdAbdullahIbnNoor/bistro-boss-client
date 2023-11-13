import React from 'react'
import { Parallax, Background } from 'react-parallax';

const Cover = ({ image, title, paragraph }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={ image }
            bgImageAlt="cover"
            strength={-100}
        >
            <div className="hero lg:h-[650px] object-contain">
                <div className="hero-overlay bg-opacity-60 w-7/12 h-1/2"></div>
                <div className="text-center text-white w-1/2 py-20">
                    <div className="h-[300px] py-16 mt-16">
                        <h1 className="mb-5 text-5xl font-bold uppercase ">{title}</h1>
                        <p className="mb-5 text-lg">{paragraph}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default Cover