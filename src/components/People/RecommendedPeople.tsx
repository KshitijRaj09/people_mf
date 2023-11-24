import React, { memo, useEffect, useState } from "react";
import {recommendedPeopleAPI} from "../../peopleApis/recommendedPeopleAPI";
import {UserCard} from "./UserCard";
import { Box, Grid, Typography } from "@mui/material";

const RecommendedPeople = () => {
   const [peopleList, setPeopleList] = useState([]);
   const [userFollowUpdated, setUserFollowUpdated] = useState<Number>(0);
   const getRecommendPeopleList = async () => {
      const data = await recommendedPeopleAPI();
      if (data) {
         setPeopleList(data);
      }
   };
   useEffect(() => {
      getRecommendPeopleList();
   }, [userFollowUpdated]);
   return (
      <Box component='div' paddingLeft={2}>
         <Typography paddingBottom={2} fontFamily='Mooli, sans-serif' component='h3'>Recommendations for you</Typography>
         <Grid container gap={2}>
         {peopleList?.map((user) => (
            <Grid item mobile={4} key={user.userId} minWidth={{ mobile: '100%', laptop: '45%' }}>
               <UserCard
                  userId={user.userId}
                  username={user.username}
                  avatar={user.avatar}
                  userDescription={user.description}
                  setUserFollowUpdated={setUserFollowUpdated}
               />
            </Grid>
         ))}
         </Grid>
      </Box>
   );
};

const MemoizedRecommendedPeople = memo(RecommendedPeople);
export default MemoizedRecommendedPeople;
