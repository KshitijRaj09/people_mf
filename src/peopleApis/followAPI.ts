import { followUserAPIUrl } from "./apiUrlconstants"
import { axiosInstance } from "./axiosInstance"

export const followUserAPI = async (userId: string) => {
    try {
        const { data } = await axiosInstance.put(`${followUserAPIUrl}/${userId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}