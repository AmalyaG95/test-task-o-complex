"use client";

import { AddingProducts, Products } from "../../home";
import { useState } from "react";

const ProductsSection = ({
  productsResponse,
}: {
  productsResponse: TProductsResponse;
}) => {
  const [orderingProducts, setOrderingProducts] = useState<TProduct[]>([]);

  return (
    <>
      <AddingProducts products={orderingProducts} />
      <Products
        orderingProducts={orderingProducts}
        setOrderingProducts={setOrderingProducts}
        productsSSR={productsResponse.products}
      />
    </>
  );
};

export default ProductsSection;
