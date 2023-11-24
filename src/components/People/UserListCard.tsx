import {
   Avatar,
   Button,
   Card,
   CardActions,
   CardHeader,
   IconButton,
} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import type {userListType} from "./type";
import styled from "@emotion/styled";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {followUserAPI} from "../../peopleApis/followAPI";
import {unFollowUserAPI} from "../../peopleApis/unfollowUserAPI";
import {deleteUserAPI} from "../../peopleApis/deleteUserAPI";

const styles = () => ({
   styleCard: {
      backgroundColor: "#EEEEEE",
      maxWidth: "600px",
   },
   followButton: {
      backgroundColor: "#F38181",
      "&:hover": {
         backgroundColor: "#C06C84",
      },
   },
   unFollowButton: {
      backgroundColor: "#B1B2FF",
      "&:hover": {
         backgroundColor: "#C06C84",
      },
   },
});

const StyledLink = styled(Link)(() => ({
   color: "#40514E",
}));

type userListCardPropsType = {
   setUserListUpdated: React.Dispatch<React.SetStateAction<Number>>;
};
export const UserListCard = ({
   userId,
   username,
   userDescription,
   avatar,
   setUserListUpdated,
   isFollowing,
}: userListType & userListCardPropsType) => {
   const classes = styles();

   const followUserHandler = async ({target}: any) => {
      const {name} = target;
      let data;
      if (name === "follow") {
         data = await followUserAPI(userId);
         if (data) {
            return setUserListUpdated((count: number) => count + 1);
         }
      }
      data = await unFollowUserAPI(userId);
      if (data) {
         return setUserListUpdated((count: number) => count + 1);
      }
   };

   const deleteuserAPIHandler = async () => {
      const data = await deleteUserAPI(userId);
      if (data) {
         setUserListUpdated((count: number) => count + 1);
      }
   };

   return (
      <>
         <Card sx={classes.styleCard}>
            <CardHeader
               avatar={
                  <StyledLink to={`/people/${userId}`}>
                     <Avatar aria-label='user-avatar'>
                        {username.charAt(0)}
                     </Avatar>
                  </StyledLink>
               }
               title={
                  <StyledLink to={`/people/${userId}`}>{username}</StyledLink>
               }
               action={
                  <IconButton
                     aria-label='delete-post'
                     onClick={deleteuserAPIHandler}>
                     <DeleteOutlineOutlinedIcon color='action' />
                  </IconButton>
               }
            />
            <CardActions sx={{display: "flex", justifyContent: "right"}}>
               <Button
                  variant='contained'
                  sx={
                     isFollowing ? classes.followButton : classes.unFollowButton
                  }
                  aria-label={isFollowing ? "unfollow" : "follow"}
                  name={isFollowing ? "unfollow" : "follow"}
                  onClick={followUserHandler}>
                  {isFollowing ? "Unfollow" : "Follow"}
               </Button>
            </CardActions>
         </Card>
      </>
   );
};
