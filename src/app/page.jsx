'use client';

import '@/app/shoesStore.css'
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
      return dataShoes.shoes.map((shoe, index) => {
        return <IconShoes
          key={index}
          idUrl={shoe.id}
          src={shoe.image_url}
          brand={shoe.brand}
          model={shoe.model}
          price={shoe.price}
        />
      })
    }
    return <p className='p-load-error'>Não foi possível carregar os dados.</p>
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <section id='icons-shoes-wrapper'>
          {isLoading ? <p className='p-load-error'>Carregando...</p> : dataMapped()}
        </section>
      </div>
    </div>
  )
};
