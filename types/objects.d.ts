interface RequestOptions {
  method: string;
  headers: {
    "Content-Type": string;
    page_size?: string;
    page?: string;
  };
  body?: string;
}

type TReview = {
  id: number;
  text: string;
};

declare module "react-text-mask" {
  export default any;
}

type TProduct = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
};

type TProductsResponse = {
  page: number;
  amount: number;
  total: number;
  products: TProduct[];
};

type TOrderResponse = {
  success: number;
  error?: string;
};

type TCart = {
  id: number;
  quantity: number;
};

type TOrderBody = {
  phone: string;
  cart: TCart[];
};
