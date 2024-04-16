import request from "@/helpers/request";
const apiUrl = process.env.O_COMPLEX_APP_API_URL;

const fetchProducts = async (page: number, pageSize: number = 10) => {
  try {
    const response: TProductsResponse = await request(
      `${apiUrl}/products?page=${page}&page_size=${pageSize}`
    );
    return response;
  } catch (error) {
    throw new Error(
      `Error fetching products for page ${page}: ${(error as Error).message}`
    );
  }
};

export default fetchProducts;
