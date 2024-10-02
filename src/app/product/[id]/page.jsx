'use client'

import '@/app/shoesStore.css';
import './pageProduct.css';
import { HeaderShoesStore as Header } from '@/components/HeaderShoesStore';
import Image from 'next/image';

import { useEffect, useState } from "react";

export default function Product({ params }) {
  const idProduct = params.id;

  const [dataShoes, setDataShoes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [imageIndex, setImageIndex] = useState(0);

  const priceFormat = dataShoes.price?.replace('.', ',');

  const { image_url, image_url_2, image_url_3, image_url_4, image_url_5 } = dataShoes;
  const productImages = [image_url, image_url_2, image_url_3, image_url_4, image_url_5];

  const goToPrevious = () => {
    const isFirstImage = imageIndex === 0;
    const newIndex = isFirstImage ? productImages.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  }

  const goToNext = () => {
    const isLastImage = imageIndex === productImages.length - 1;
    const newIndex = isLastImage ? 0 : imageIndex + 1;
    setImageIndex(newIndex)
  }

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
                <div className='skip-prev-arrows' id='arrow-right' onClick={goToNext}>
                  <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722479742/arrowsearch_azxb6r.svg' width={15} height={15} />
                </div>
                <div className='skip-prev-arrows' id='arrow-left' onClick={goToPrevious}>
                  <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722479742/arrowsearch_azxb6r.svg' width={15} height={15} />
                </div>
                <div id='product-radio-wrapper'>
                  {productImages.map((_image, index) =>
                    <input key={index} type="radio" id='product-radio' name="image" checked={index === imageIndex} readOnly onClick={() => setImageIndex(index)} />
                  )}
                </div>
                <Image alt='' src={productImages[imageIndex]} width={50} height={50} className='product-images-thumb' id='product-image-1' priority></Image>
                <Image alt='' src={dataShoes.image_url} onClick={() => setImageIndex(0)} width={50} height={50} className='product-images-thumb' id='product-image-2' priority></Image>
                <Image alt='' src={dataShoes.image_url_2} onClick={() => setImageIndex(1)} width={50} height={50} className='product-images-thumb' id='product-image-3' priority></Image>
                <Image alt='' src={dataShoes.image_url_3} onClick={() => setImageIndex(2)} width={50} height={50} className='product-images-thumb' id='product-image-4' priority></Image>
                <Image alt='' src={dataShoes.image_url_4} onClick={() => setImageIndex(3)} width={50} height={50} className='product-images-thumb' id='product-image-5' priority></Image>
              </section>
              <section id='product-model-name'>
                <p>{`${dataShoes.brand} ${dataShoes.model}`}</p>
                <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726180407/stars_heh6tx.svg' width={75} height={15} />
                <span id='reviews-text'>0,0 | 0 Avaliações</span>
              </section>
              <section id='product-price-cart'>
                <p>R$ {priceFormat}</p>
                <div id='product-cart-favorite-wrapper'>
                  <button id='product-button-cart'>
                    <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726192400/cart_white_auykmw.svg' width={25} height={25} />
                    Adicionar ao carrinho
                  </button>
                  <button id='product-button-favorite'>
                    <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg' width={25} height={25} />
                  </button>
                </div>
                <div id='price-free-shipping'>
                  <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726197569/truck_etliwi.svg' width={20} height={20} />
                  <span>Frete grátis acima de R$ 129</span>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div >
  )
}