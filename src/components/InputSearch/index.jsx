'use client'

import './InputSearch.css';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputSearch({ isActiveSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${searchQuery}`);
    };
  };

  return (
    <div id='search-container' className={isActiveSearch ? 'active' : ''}>
      <Image
        src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449075/search-desktop_kvf8a3.svg'
        alt='pesquisar'
        id='search-desktop-icon'
        width={20}
        height={20}
      />
      <form id='form-box' onSubmit={handleSubmit}>
        <input
          type='text'
          id='search-box'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Pesquisar'
          autoComplete='off'
        />
        <button type='submit' id='search-button'>
          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722479742/arrowsearch_azxb6r.svg'
            alt='buscar'
            width={15}
            height={15}
          />
        </button>
      </form>
    </div>
  )
}