'use client'

import { useEffect, useState } from "react";

// export function generateStaticParams() {
//   const ids = [];

//   for (let index = 1; index <= 999; index += 1) {
//     ids.push(index.toString());
//   }

//   const result = ids.map(id => ({ id }));
//   // console.log(result);
//   return result;
// }

export default function Teste({ params }) {
  const idProduct = params.id;

  const [dataShoes, setDataShoes] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${idProduct}`;
      const response = await fetch(apiUrl);
      const result = await response.json();
      setDataShoes(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message)
    }
  };

  useEffect(() => {
    fetchData()
  })

  return (
    <div>
      {isLoading ? <p>Carregando...</p> : <h1>Olá Mundo {idProduct}</h1>}
    </div>
  )
}