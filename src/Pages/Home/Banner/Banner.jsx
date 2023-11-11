import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner_01 from '../../../assets/home/01.jpg';
import banner_02 from '../../../assets/home/02.jpg';
import banner_03 from '../../../assets/home/03.png';
import banner_04 from '../../../assets/home/04.jpg';
import banner_05 from '../../../assets/home/05.png';
import banner_06 from '../../../assets/home/06.png';

const Banner = () => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                showIndicators={false}
                // dynamicHeight={true}
            >
                <div>
                    <img src={banner_01} />
                </div>
                <div>
                    <img src={banner_02} />
                </div>
                <div>
                    <img src={banner_03} />
                </div>
                <div>
                    <img src={banner_04} />
                </div>
                <div>
                    <img src={banner_05} />
                </div>
                <div>
                    <img src={banner_06} />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
