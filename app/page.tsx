import request from "@/helpers/request";
import { Header, ProductsSection, Reviews } from "./components/home";
import fetchProducts from "./lib/fetchProducts";

const apiUrl = process.env.O_COMPLEX_APP_API_URL;

const App = async () => {
  const reviews = await request(`${apiUrl}/reviews`);
  const productsResponse = await fetchProducts(1, 20);

  return (
    <>
      <Header />
      <Reviews reviews={reviews} />
      <ProductsSection productsResponse={productsResponse} />
    </>
  );
};

export default App;
