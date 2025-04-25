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

export const sendOtp = async (email: string) => {
  try {
    const { data } = await axios.post(`${baseURL}/sendOtp/${email}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/verifyOTP/${email}/${otp}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const changePassword = async (user: loginUserType) => {
  try {
    const { data } = await axios.post(`${baseURL}/changePass`, user);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
