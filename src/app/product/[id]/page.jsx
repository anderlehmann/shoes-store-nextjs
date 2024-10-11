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
  const [favorites, setFavorites] = useState([]);

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
      error.message === 'Item não encontrado.' ?
        setError(error.message) : setError('Não foi possível carregar os dados')
      console.log(error.message);
    }
  };

  const priceFormat = dataShoes.price?.replace('.', ',');
  const shoesNumbers = [35, 36, 37, 38, 39, 40, 41, 42, 43];

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

  const getFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const result = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavorites(result);
  }

  const verifyIsFavorite = () => {
    if (favorites.length >= 1) {
      const isFavorite = favorites.some((fav) => fav.id === Number(idProduct));
      return isFavorite;
    }
    return false;
  }

  const addFavorite = () => {
    if (verifyIsFavorite()) {
      return
    }
    const updateFavorites = [...favorites, dataShoes];
    setFavorites(updateFavorites);
    localStorage.setItem('favorites', JSON.stringify(updateFavorites));
  };

  const removeFavorite = () => {
    if (!verifyIsFavorite()) {
      return
    }
    const updatedFavorites = favorites.filter(fav => fav.id !== Number(idProduct));
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    fetchData();
    getFavorites();
  }, []);

  console.log('aqui', favorites)

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <main id='main-product-wrapper'>
          {isLoading && <p className='p-load-error'>Carregando...</p>}
          {!isLoading && error && <p className='p-load-error'>{error}</p>}
          {!isLoading && !error && Object.keys(dataShoes).length > 0 && (
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
                <p>Escolha seu tamanho:</p>
                <div id='size-shoes-wrapper'>
                  {shoesNumbers.map((number, index) =>
                    <label key={index} htmlFor={number} className='label-shoe-number'>
                      {number}
                      <input type='radio' name='shoeNumber' id={number} className='radio-number-shoe' />
                    </label>)}
                </div>
                <div id='product-cart-favorite-wrapper'>
                  <button id='product-button-cart'>
                    <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726192400/cart_white_auykmw.svg' width={25} height={25} />
                    Adicionar ao carrinho
                  </button>
                  <button id='product-button-favorite' onClick={() => (verifyIsFavorite() ? removeFavorite() : addFavorite())}>
                    <Image
                      alt=''
                      src={verifyIsFavorite() ?
                        'https://res.cloudinary.com/dsgkcgx1s/image/upload/v1728675847/like-filled_czx6bl.svg' :
                        'https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg'}
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
                <div id='price-free-shipping'>
                  <Image alt='' src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1726197569/truck_etliwi.svg' width={20} height={20} />
                  <span>Frete grátis acima de R$ 199</span>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div >
  )
}