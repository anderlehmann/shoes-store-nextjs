'use client'

import '@/app/shoesStore.css';
import './pageProduct.css';
import { HeaderShoesStore as Header } from '@/components/HeaderShoesStore';
import Image from 'next/image';

import { useEffect, useState } from "react";

export default function Teste({ params }) {
  const idProduct = params.id;

  const [dataShoes, setDataShoes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${idProduct}`;
      const response = await fetch(apiUrl);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setDataShoes(result);
      setIsLoading(false);

      console.log(dataShoes);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <main id='main-product-wrapper'>
          {isLoading && <p className='p-load-error'>Carregando...</p>}
          {error && !isLoading && <p className='p-load-error'>Item não encontrado.</p>}
          {!dataShoes && !isLoading && !error && <p className='p-load-error'>Não foi possível carregar os dados.</p>}
          {!isLoading && !error && dataShoes && (
            <>
              <section id='product-images'>
                <Image alt='' src={dataShoes.image_url} width={50} height={50} className='product-images-thumb' id='product-image-1'></Image>
                <Image alt='' src={dataShoes.image_url} width={50} height={50} className='product-images-thumb' id='product-image-2'></Image>
                <Image alt='' src={dataShoes.image_url} width={50} height={50} className='product-images-thumb' id='product-image-3'></Image>
                <Image alt='' src={dataShoes.image_url} width={50} height={50} className='product-images-thumb' id='product-image-4'></Image>
                <Image alt='' src={dataShoes.image_url} width={50} height={50} className='product-images-thumb' id='product-image-5'></Image>
              </section>
              <section id='product-model-name'>
                <p>{`${dataShoes.brand} ${dataShoes.model}`}</p>
                <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726180407/stars_heh6tx.svg' width={75} height={15} />
                <span id='reviews-text'>0,0 | 0 Avaliações</span>
              </section>
              <section id='product-price-cart'>
                <p>R$ {dataShoes.price}</p>
                <button>
                  <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726192400/cart_white_auykmw.svg' width={25} height={25} />
                </button>
              </section>
            </>
          )}
        </main>
      </div>
    </div >
  )
}