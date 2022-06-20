import axios from "axios";
import CONST from "../utils/constants";

// const config = {
//   baseURL: CONST.BASE_API,
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
// };

const isDev = process.env.NODE_ENV === 'development';

const isLocalDev = (isDev) => {
  let axiosConfig;
  axiosConfig = axios.create();
  if (isDev) {
    const config = {
      baseURL: CONST.BASE_API
    };
    axiosConfig = axios.create(config);
  }
  return axiosConfig;
};

const axiosInstance = isLocalDev(isDev);

export default axiosInstance


// export const axiosInstance = axios.create(config);
