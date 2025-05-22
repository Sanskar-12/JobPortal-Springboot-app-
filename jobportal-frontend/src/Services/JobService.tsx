import axios from "axios";
import { applyJobType, postJobType } from "../types";

const baseURL = "http://localhost:8080/jobs";

export const postJob = async (job: postJobType) => {
  try {
    const { data } = await axios.post(`${baseURL}/post/job`, job);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllJobs = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/getall/jobs`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getJob = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseURL}/get/job/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const applyJob = async (applicationData: applyJobType, id: string) => {
  try {
    const { data } = await axios.post(
      `${baseURL}/apply/${id}`,
      applicationData
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
