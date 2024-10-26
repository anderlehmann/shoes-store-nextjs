'use client';

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import SectionMoreRelevants from '@/components/SectionMoreRelevants';
import BrandSlider from '@/components/BrandSlider';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <Banner />
        <BrandSlider />
        <SectionMoreRelevants />
        <Newsletter />
      </div>
    </div>
  )
};
