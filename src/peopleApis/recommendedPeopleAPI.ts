import { getRecommendedUserApiUrl } from "./apiUrlconstants";
import { axiosInstance } from "./axiosInstance";

export const recommendedPeopleAPI = async () => {
    try {
        const { data } = await axiosInstance.get(getRecommendedUserApiUrl);
        return data;
    } catch (error) {
        console.log(error);
    }
}