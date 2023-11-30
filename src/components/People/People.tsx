import React, {useState, useEffect, memo} from "react";
import {getAllUserApi} from "../../peopleApis/getAllUserAPI";
import {Grid} from "@mui/material";
import {UserListCard} from "./UserListCard";

const People = () => {
   const [peopleList, setPeopleList] = useState([]);
   const [userListUpdated, setUserListUpdated] = useState<Number>(0);
   const getAllUserList = async () => {
      const data = await getAllUserApi();
      if (data) {
         setPeopleList(data);
      }
   };
   useEffect(() => {
      getAllUserList();
   }, [userListUpdated]);
   return (
      <Grid container gap={2} maxWidth='laptop'>
         {peopleList?.map((user) => (
            <Grid item mobile={12} key={user.userid}>
               <UserListCard
                  userId={user.userId}
                  username={user.username}
                  avatar={user.avatar}
                  userDescription={user.description}
                  setUserListUpdated={setUserListUpdated}
                  isFollowing={user.isFollowing}
               />
            </Grid>
         ))}
      </Grid>
   );
};

const memoizedPeople = memo(People);
export default memoizedPeople;
