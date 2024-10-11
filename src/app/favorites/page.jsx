'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import '@/app/shoesStore.css'
import './pageFavorites.css';
import { HeaderShoesStore as Header } from '@/components/HeaderShoesStore';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const result = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavorites(result);
  }

  const removeFavorite = (event, id) => {
    event.preventDefault();
    const updatedFavorites = favorites.filter(fav => fav.id !== Number(id));
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <p id='my-favorites'>Meus favoritos</p>
        <main className='icons-favorites-wrapper'>

          {favorites.length <= 0 ? <p id='p-none-favorite'>Nenhum item adicionado aos favoritos.</p> :
            favorites.map((item, index) =>
              <Link key={index} href={`/product/${item.id}`} className='icon-favorite-shoe'>
                <Image
                  src={item.image_url}
                  className='image-shoe-favorite'
                  alt='tenis'
                  width={100}
                  height={100}
                  priority
                />
                <div className='name-price-wrapper-favorite'>
                  <p>{`${item.brand} ${item.model}`}</p>
                  <p>{item.price.replace('.', ',')}</p>
                </div>
                <button className='button-delete-favorite' onClick={(e) => removeFavorite(e, item.id)}>
                  <Image
                    src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1728509724/icon_trash_lezpbj.svg'
                    alt='tenis'
                    width={16}
                    height={18}
                  />
                </button>
              </Link>
            )}
        </main>
      </div>
    </div>
  )
}