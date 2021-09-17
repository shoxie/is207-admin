import axiosClient from "@app/AxiosClient";
import {
  PRODUCT_GET_ALL_ENDPOINT,
  PRODUCT_POST_ONE_ENDPOINT,
  PRODUCT_GET_ONE_ENDPOINT
} from "@constant/endpoints";

const productApi = {
  getAllProducts: async () => {
    const url = `${PRODUCT_GET_ALL_ENDPOINT}`;
    return await axiosClient.get(url).then((response) => response.data);
  },
  getOneProduct: async (id) => {
    const url = `${PRODUCT_GET_ONE_ENDPOINT}${id}`;
    return await axiosClient.get(url).then((response) => response.data);
  },
  postOneProduct: async (product) => {
    const url = `${PRODUCT_POST_ONE_ENDPOINT}`;
    return await axiosClient
      .post(url, product)
      .then((response) => response.data);
  },
};

export default productApi;
