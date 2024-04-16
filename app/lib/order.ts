import request from "@/helpers/request";

const apiUrl = process.env.O_COMPLEX_APP_API_URL;

const order = async (body: TOrderBody) => {
  try {
    const response: TOrderResponse = await request(
      `${apiUrl}/order`,
      "POST",
      body
    );

    return response;
  } catch (error) {
    throw new Error(`Error ordering products: ${(error as Error).message}`);
  }
};

export default order;
