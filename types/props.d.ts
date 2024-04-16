type TReviewsProps = {
  reviews: TReview[];
};

interface IOrderingProductsState {
  setOrderingProducts: TSetProducts;
  orderingProducts: TProduct[];
}

interface IProductsProps extends IOrderingProductsState {
  productsSSR: TProduct[];
  
}

interface IProductCardProps extends IOrderingProductsState  {
  product: TProduct;
}
