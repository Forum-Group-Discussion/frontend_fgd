import axios from "axios";
import CONST from "../utils/constants";

const config = {
  baseURL: CONST.BASE_API,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
};

export const axiosInstance = axios.create(config);
