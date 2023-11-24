import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import People from './People/People';
import Loader from './Loaders';

export const Main = () => {
   const [theme, setTheme] = useState(null);

   useEffect(() => {
      import('Sharedlib/theme').then((sharedTheme) => {
         setTheme(sharedTheme.default);
      }).catch((error) => {
         console.log('Error loading shared theme', error);
      })
   }, []);
   
   if (!theme) {
      return (
        <Loader />
      );
    }

   return (
      <ThemeProvider theme={theme}>
         <People />
      </ThemeProvider>
      )
}