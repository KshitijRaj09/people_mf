import React from "react";
import { userRecommdedType } from "./type";
type userCardPropsType = {
    setUserFollowUpdated: React.Dispatch<React.SetStateAction<Number>>;
};
export declare const UserCard: ({ userId, username, userDescription, avatar, setUserFollowUpdated, }: userRecommdedType & userCardPropsType) => React.JSX.Element;
export {};
