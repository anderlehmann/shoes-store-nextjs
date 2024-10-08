'use client'
import Link from "next/link"
import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

import InputSearch from "./InputSearch";
import '@/app/shoesStore.css';

export function HeaderShoesStore() {
  const [isActiveSearch, setIsActiveSearch] = useState(false);

  const toggleSearchInput = () => {
    isActiveSearch ? setIsActiveSearch(false) : setIsActiveSearch(true);
  }

  return (
    <>
      <header id='header-store'>
        <Link href='/'>Solado®</Link>

        <InputSearch isActiveSearch={false} />

        <div id='icons-header-wrapper'>
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/search-mobile_llymff.svg'
            alt='pesquisar'
            className='icons-header-store'
            width={60}
            height={60}
            id='search-mobile'
            onClick={toggleSearchInput}
          />

          <Link href='/cart'>
            <Image
              src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/cart_mgrjub.svg'
              alt='carrinho'
              className='icons-header-store'
              width={60}
              height={60}
            />
          </Link>

          <Link href='/favorites'>
            <Image
              src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg'
              alt='favoritos'
              className='icons-header-store'
              width={60}
              height={60}
            />
          </Link>

          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/user_sflbco.svg'
            alt='usuário'
            className='icons-header-store'
            width={60}
            height={60}
          />
        </div>
      </header>
      {isActiveSearch && <InputSearch isActiveSearch={isActiveSearch} />}
    </>
  )
}
