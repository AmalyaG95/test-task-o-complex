"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ProductCard } from "../../home";
import fetchProducts from "@/app/lib/fetchProducts";
import { hasMorePages } from "@/helpers";

import "./InfiniteScroll.scss";
import styles from "./Products.module.scss";

const Products = ({
  productsSSR,
  setOrderingProducts,
  orderingProducts,
}: IProductsProps) => {
  const [products, setProducts] = useState<TProduct[]>(productsSSR);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNextPage = async () => {
    try {
      const nextPage = page + 1;
      const productsResponse = await fetchProducts(nextPage, 20);
      const hasMore = hasMorePages(productsResponse);

      setProducts((prevProducts) => [
        ...prevProducts,
        ...productsResponse.products,
      ]);
      setPage(nextPage);

      setHasMore(hasMore);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <InfiniteScroll
          dataLength={products.length}
          next={fetchNextPage}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p>No more products to load</p>}
        >
          {products?.map((product) => (
            <ProductCard
              orderingProducts={orderingProducts}
              setOrderingProducts={setOrderingProducts}
              product={product}
              key={product.id}
            />
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default Products;
