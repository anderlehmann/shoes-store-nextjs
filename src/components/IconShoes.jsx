'use client'
import Link from 'next/link'
import Image from 'next/image';

import './IconShoes.css';

export function IconShoes({ idUrl, src, brand, model, price }) {
  const priceFormat = price.replace('.', ',');

  return (
    <Link href={`/product/${idUrl}`} id='box-icon-link'>
      <article className='box-icon-shoes'>
        <Image
          src={src}
          alt='tenis'
          id='image-icon-shoes'
          width={200}
          height={200}
          priority
        />
        <div id='model-price-box'>
          <p id='model-box'>{`${brand} ${model}`}</p>
          <p id='price-box'>R$ {priceFormat}</p>
        </div>
      </article>
    </Link>
  )
}