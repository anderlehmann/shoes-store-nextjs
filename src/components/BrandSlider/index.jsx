import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSTransition } from 'react-transition-group';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import './BrandSlider.css';

import brandData from './brandData';

export default function BrandSlider() {
  return (
    <CSSTransition
      in={true}
      timeout={1000}
      unmountOnExit
    >

      <div id='brand-slider-wrapper'>
        <p id='p-brand-slider'>Escolha por marca</p>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          className='brand-slider-swiper'
          slidesPerView={2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          spaceBetween={10}
          centeredSlides={false}
          breakpoints={{
            540: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {brandData.map((data, index) =>
            <SwiperSlide key={index + 1} className='swiper-image-wrapper'>
              <Link href={`/brand/${data.brand}`}>
                <Image
                  className='slider-brand-image'
                  src={data.src}
                  alt={data.brand}
                  width={300}
                  height={170}
                  priority
                />
              </Link>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </CSSTransition>
  )
}