import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";




const Category = ({ category, products, slug }) => {



  

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.data?.[0]?.attributes?.name}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                  
                </div>
                {/* products grid end */}

                {/* PAGINATION BUTTONS END */}
              
            </Wrapper>
        </div>
    );
};

export default Category;

export async function getStaticPaths() {
    const category = await fetchDataFromApi("/api/categories?populate=*");
    console.log(category);
    const paths = category?.data?.map((c) => ({

            params: {
                slug: String(c.attributes.slug),
            },
        }));
        


    return {
        paths,
        fallback: false,
    };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromApi(
        `/api/categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`
    );

    return {
        props: {
            category,
            products,
            slug,
        },
    };
}