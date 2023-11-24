import { unfollowUserAPIUrl } from "./apiUrlconstants";
import { axiosInstance } from "./axiosInstance";

export const unFollowUserAPI = async (userId: string) => {
    try {
        const { data } = await axiosInstance.put(`${unfollowUserAPIUrl}/${userId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}