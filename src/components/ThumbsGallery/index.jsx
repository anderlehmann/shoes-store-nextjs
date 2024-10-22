'use client'

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { useState } from "react"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './ThumbsGallery.css'

export default function ThumbsGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        loop={true}
        spaceBetween={0}
        navigation={true}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper"
      >
        {images.map((image, index) =>
          <SwiperSlide key={index}>
            <Image className='top-image-slide' alt='' src={image} width={800} height={800} priority />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) =>
          <SwiperSlide key={index}>
            <Image className='bottom-image-slide' alt='' src={image} width={800} height={800} priority />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}