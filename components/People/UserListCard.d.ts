import React from "react";
import type { userListType } from "./type";
type userListCardPropsType = {
    setUserListUpdated: React.Dispatch<React.SetStateAction<Number>>;
};
export declare const UserListCard: ({ userId, username, userDescription, avatar, setUserListUpdated, isFollowing, }: userListType & userListCardPropsType) => React.JSX.Element;
export {};
