import { HeroBanner } from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard.jsx";
import Wrapper from "@/components/Wrapper";

import fetchDataFromApi from "@/utils/api";
import { useEffect, useState } from "react";


export default function Home({products}) {
  console.log(products.data)


  useEffect(() => {
    fetchDataFromApi("api/products?populate=*").then((data) => {
      console.log(data);
    })
  },[])

 
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>


        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ) 
        )}


        </div>
      </Wrapper>
    </main>
  );
}


//fetching data The data required to render the page is available at build time ahead of a user’s request
// The data comes from a headless CMS


export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}