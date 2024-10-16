'use client';

import '@/app/shoesStore.css'
import Banner from '@/components/Banner';
import { HeaderShoesStore as Header } from '@/components/HeaderShoesStore';
import { IconShoes } from '@/components/IconShoes';
import { useEffect, useState } from 'react';

export default function HomeShoesStore() {
  const [dataShoes, setDataShoes] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(apiUrl);
      const result = await response.json();
      setDataShoes(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message)
    }
  };

  const dataMapped = () => {
    if (dataShoes.shoes?.length > 0) {
      return (
        <>
          <p id='text-top-category'>Mais relevantes</p>
          <section id='icons-shoes-wrapper'>
            {dataShoes.shoes.map((shoe, index) => {
              return <IconShoes
                key={index}
                idUrl={shoe.id}
                src={shoe.image_url}
                brand={shoe.brand}
                model={shoe.model}
                price={shoe.price}
              />
            })}
          </section>
        </>
      )
    };
    return <p className='p-load-error'>Não foi possível carregar os dados.</p>
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <Banner />
        {isLoading ? <p className='p-load-error'>Carregando...</p> : dataMapped()}
      </div>
    </div>
  )
};
