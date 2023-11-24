/// <reference types="react" />
export type isUserIdExistPropType = {
    isExistingUser: boolean;
    setIsExistingUser: React.Dispatch<React.SetStateAction<boolean>>;
};
export type PostsType = {
    postId: string;
    postContent: string;
    userId: string;
    likes: Array<string>;
    username: string;
    createdAt: Date;
    updatedAt: Date;
};
