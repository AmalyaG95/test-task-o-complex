import { SingleOrderingProduct } from "../../home";

const OrderingProducts = ({ products }: { products: TProduct[] }) => {
  return (
    <div>
      {products.map((product) => {
        if (product.quantity === 0) return;

        return <SingleOrderingProduct product={product} key={product.id} />;
      })}
    </div>
  );
};

export default OrderingProducts;
