import axios from "axios";
import CONST from "../utils/constants";
import { getToken } from "../utils/helpers";

const config = {
  baseURL: CONST.BASE_API,
  headers: {
    "Content-Type": "application/json",
    ...(!!getToken() && { Authorization: `Bearer ${getToken()}` }),
  },
};

export const axiosInstance = axios.create(config);
