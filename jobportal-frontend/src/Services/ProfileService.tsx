import axios from "axios";
import { profileUserServiceType } from "../types";

const baseURL = "http://localhost:8080/profiles";

export const getUserProfile = async (id: number) => {
  try {
    const { data } = await axios.get(`${baseURL}/getprofile/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUserProfile = async (profile: profileUserServiceType) => {
  try {
    const { data } = await axios.put(`${baseURL}/updateprofile`, profile);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
