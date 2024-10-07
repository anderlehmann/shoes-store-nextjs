'use client'

import { HeaderShoesStore as Header } from '@/components/HeaderShoesStore';
import { IconShoes } from '@/components/IconShoes';
import '@/app/shoesStore.css'

import { useEffect, useState } from 'react';

export default function SearchPage({ params }) {
  const searchQuery = params.query;

  const [dataShoes, setDataShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${searchQuery}`);
      const result = await response.json();
      setDataShoes(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message)
    };
  };

  const dataMapped = () => {
    if (dataShoes.length > 0) {
      return dataShoes.map((shoe, index) => {
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
    return <p className='p-load-error'>Nenhum item encontrado.</p>
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <p id='search-results-text' >Exibindo resultados para: <b>{decodeURIComponent(searchQuery)}</b></p>
        <section id='icons-shoes-wrapper'>
          {isLoading ? <p className='p-load-error'>Carregando...</p> : dataMapped()}
        </section>
      </div>
    </div>
  )
}