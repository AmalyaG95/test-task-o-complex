"use client";

import { truncateString } from "@/helpers";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import useMediaWidth from "@/hooks/useMediaWidth";

import styles from "./SingleOrderingProduct.module.scss";

const SingleOrderingProduct = ({ product }: { product: TProduct }) => {
  const windowWidth = useWindowWidth();
  const isMobile = useMediaWidth(windowWidth <= 768);

  return (
    <div className={styles.singleOrderingProduct}>
      <div className={styles.title}>
        {truncateString(product.title, isMobile ? 13 : 24)}
      </div>
      <div className={styles.quantity}>x{product.quantity}</div>
      <div className={styles.price}>
        {product.price * (product.quantity as number)}₽
      </div>
    </div>
  );
};

export default SingleOrderingProduct;
