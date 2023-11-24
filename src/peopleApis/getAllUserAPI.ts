import axios from "axios";
import { getAllUserListAPIUrl } from "./apiUrlconstants";
import { axiosInstance } from "./axiosInstance";

export const getAllUserApi = async () => {
    try {
        const { data } = await axiosInstance.get(getAllUserListAPIUrl);
        return data;
    } catch (error) {
        console.log(error);
    }
}