import axios from "axios";
import { loginUserType, registerUserType } from "../types";

const baseURL = "http://localhost:8080/users";

export const registerUser = async (user: registerUserType) => {
  try {
    const { data } = await axios.post(`${baseURL}/register`, user);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async (user: loginUserType) => {
  try {
    const { data } = await axios.post(`${baseURL}/login`, user);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
