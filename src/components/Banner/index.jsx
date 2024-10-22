'use client'

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

export default function Banner() {
  const bannerData = [
    {
      src: 'https://res.cloudinary.com/dsgkcgx1s/image/upload/v1729122137/bannerblackcrop_g3ribm.jpg',
      alt: 'tenis pretos'
    },
    {
      src: 'https://res.cloudinary.com/dsgkcgx1s/image/upload/v1729118676/bannerwhitecrop_u7br0g.jpg',
      alt: 'tenis brancos',
    },
    {
      src: 'https://res.cloudinary.com/dsgkcgx1s/image/upload/v1729118676/bannercorridacrop_fqmyla.jpg',
      alt: 'tenis esportes',
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      className='swiper-banner'
    >
      {bannerData.map((data, index) =>
        <SwiperSlide key={index}>
          <Image
            className='swiper-images'
            alt={data.alt}
            src={data.src}
            width={1510}
            height={510}
          />
        </SwiperSlide>
      )}
    </Swiper>
  )
};
