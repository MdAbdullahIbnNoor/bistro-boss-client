import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Slide_1 from '../../../assets/home/slide1.jpg';
import Slide_2 from '../../../assets/home/slide2.jpg';
import Slide_3 from '../../../assets/home/slide3.jpg';
import Slide_4 from '../../../assets/home/slide4.jpg';
import Slide_5 from '../../../assets/home/slide5.jpg';


const Category = () => {
    return (
        <div className='my-24'>
            <h2 className='text-5xl text-gray-600 border-t-4 border-b-4 mb-10 py-3 text-center w-1/4 mx-auto'>ORDER ONLINE</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='relative' src={Slide_1} />
                    <h3 className='text-2xl w-1/3 px-24 uppercase -mt-24 absolute text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={Slide_2} />
                    <h3 className='text-2xl w-1/3 px-24 uppercase -mt-24 absolute text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={Slide_3} />
                    <h3 className='text-2xl w-1/3 px-24 uppercase -mt-24 absolute text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={Slide_4} />
                    <h3 className='text-2xl w-1/3 px-24 uppercase -mt-24 absolute text-white'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='relative' src={Slide_5} />
                    <h3 className='text-2xl w-1/3 px-24 uppercase -mt-24 absolute text-white'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Category