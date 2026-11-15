"use client"

import { useEffect, useState } from "react";
import { ProductCardComponent, type ProductResponse } from "./productCardComponent";

export default function ProductCardListComponents() {
  // create state 
  const [products, setProducts] = useState<ProductResponse[]>([]);

  // create effect for side-effect (api, web socket)
  useEffect(() => {
    // write logic of fetching api 
    async function fetchData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products`);
      if (!response.ok) return;
      const data: { products: ProductResponse[] } = await response.json();
      setProducts(data.products);
    }

    fetchData(); //calling fetchData function
  },[])

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {
        products.map((product) => (
          <ProductCardComponent key={product.id} {...product} />
        ))
      }
    </section>
  )
}
