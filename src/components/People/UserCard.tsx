import {Avatar, Button, Card, CardActions, CardHeader} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {userRecommdedType} from "./type";
import styled from "@emotion/styled";
import {followUserAPI} from "../../peopleApis/followAPI";

const styles = () => ({
   styleCard: {
      backgroundColor: "#EEEEEE",
      maxWidth: "250px",
   },
   followButton: {
      backgroundColor: "#F38181",
      "&:hover": {
         backgroundColor: "#C06C84",
      },
   },
});

const StyledLink = styled(Link)(() => ({
   color: "#40514E",
}));

type userCardPropsType = {
   setUserFollowUpdated: React.Dispatch<React.SetStateAction<Number>>;
};
export const UserCard = ({
   userId,
   username,
   userDescription,
   avatar,
   setUserFollowUpdated,
}: userRecommdedType & userCardPropsType) => {
   const classes = styles();

   const followUserHandler = async () => {
      const data = await followUserAPI(userId);
      if (data) {
         setUserFollowUpdated((count: number) => count + 1);
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
            />
            <CardActions>
               <Button
                  variant='contained'
                  sx={classes.followButton}
                  fullWidth
                  onClick={followUserHandler}>
                  Follow
               </Button>
            </CardActions>
         </Card>
      </>
   );
};
