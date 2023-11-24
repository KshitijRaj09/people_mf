import { peopleApiRoute } from "./apiUrlconstants"
import { axiosInstance } from "./axiosInstance"

export const deleteUserAPI = async (userId: string) => {
    try {
        const { data } = await axiosInstance.delete(`${peopleApiRoute}/${userId}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}