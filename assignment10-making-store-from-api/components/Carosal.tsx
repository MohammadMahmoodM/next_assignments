'use client'
import React from 'react';

import { Swiper, SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import ImageOne from '@/public/img1.jpg'
import ImageTwo from '@/public/img2.jpg'
import ImageThree from '@/public/img3.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carosal() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <h1>Slide 1 Content</h1>
            <p>Your additional content here</p>
          </div>
          <Image src={ImageOne} alt="Slide 1" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <h1>Slide 2 Content</h1>
            <p>Your additional content here</p>
          </div>
          <Image src={ImageTwo} alt="Slide 2" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <h1>Slide 3 Content</h1>
            <p>Your additional content here</p>
          </div>
          <Image src={ImageThree} alt="Slide 3" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
