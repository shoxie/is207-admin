import axiosClient from "@app/AxiosClient";
import { CATEGORY_GET_ALL_ENDPOINT, CATEGORY_POST_ONE_ENDPOINT } from "@constant/endpoints";

const categoryApi = {
  getAll: () => {
    const url = `${CATEGORY_GET_ALL_ENDPOINT}`;
    return axiosClient.get(url).then((response) => response.data);
  },
  postOne: (data) => {
      const url =`${CATEGORY_POST_ONE_ENDPOINT}`
      return axiosClient.post(url, data).then((response) => response.data);
  }
};

export default categoryApi;
