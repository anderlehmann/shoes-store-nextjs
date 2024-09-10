'use client'
import Link from "next/link"
import Image from "next/image";

import './shoesStore.css';

export function HeaderShoesStore() {
  return (
    <header id='header-store'>
      <Link href='/projetos/solado-store'>Solado®</Link>

      <div id='search-container'>
        <Image
          src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449075/search-desktop_kvf8a3.svg'
          alt='pesquisar'
          id='search-desktop'
          width={20}
          height={20}
        />
        <input type='text' id='search-box' placeholder='Pesquisar' />
        <button id='search-button'>
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722479742/arrowsearch_azxb6r.svg'
            alt='buscar'
            width={15}
            height={15}
          />
        </button>
      </div>

      <div id='icons-header-wrapper'>
        <Image
          src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/search-mobile_llymff.svg'
          alt='pesquisar'
          className='icons-header-store'
          width={60}
          height={60}
          id='search-mobile'
        />

        <Link href='/projetos/solado-store/carrinho'>
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/cart_mgrjub.svg'
            alt='carrinho'
            className='icons-header-store'
            width={60}
            height={60}
          />
        </Link>

        <Link href='/projetos/solado-store/favoritos'>
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg'
            alt='favoritos'
            className='icons-header-store'
            width={60}
            height={60}
          />
        </Link>

        <Link href="/projetos/solado-store/usuario">
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/user_sflbco.svg'
            alt='usuário'
            className='icons-header-store'
            width={60}
            height={60}
          />
        </Link>
      </div>
    </header>
  )
}
