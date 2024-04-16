"use client";

import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { truncateString } from "@/helpers";

import styles from "./ProductCard.module.scss";

const ProductCard = ({
  product,
  setOrderingProducts,
  orderingProducts,
}: IProductCardProps) => {
  const [clickedOnBuy, setClickedOnBuy] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    product.quantity = quantity;

    const productIndex = orderingProducts.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      const updatedProducts = [...orderingProducts];
      updatedProducts[productIndex] = product;
      setOrderingProducts(updatedProducts);
    }
  }, [quantity]);

  const onBuy = () => {
    setClickedOnBuy(true);
    setQuantity(1);
    setOrderingProducts([...orderingProducts, product]);
  };

  const onPlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onMinus = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    
    if (inputValue[0] === "0") {
      inputValue = inputValue.substring(1);
    }
    inputValue = inputValue.replace(/\D/g, '');

    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue)) {
      setQuantity(parsedValue);
    } else {
      setQuantity(0);
    }
  };

  return (
    <article className={styles.productCard}>
      <div className={styles.imgWrapper}>
        <Image
          alt={product.title}
          src={product.image_url}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.titleAndDesc}>
          <h2 className={styles.title}>{truncateString(product.title, 25)}</h2>
          <p className={styles.description}>
            {truncateString(product.description, 141)}
          </p>
        </div>
        <div>
          <p className={styles.price}>{product.price}</p>
          {clickedOnBuy ? (
            <div className={styles.buyPanel}>
              <button onClick={onMinus} className={styles.minus}>
                -
              </button>
              <input
                type="number"
                value={quantity.toString()}
                min={0}
                onChange={(e) => onChange(e)}
              />
              <button onClick={onPlus} className={styles.plus}>
                +
              </button>
            </div>
          ) : (
            <button className={styles.buyButton} onClick={onBuy}>
              купить
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
