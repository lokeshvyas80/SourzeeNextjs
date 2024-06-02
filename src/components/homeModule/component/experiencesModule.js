import React from 'react';
import { Button, Grid } from '@mui/material';
import { AboutPera, AboutTextBox, CustomSmallHeading, CustomTypographySmallHeading } from '../style';

const ExperiencesModule = () => {
  return (
    <>
      <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
          <img src='../images/home/experiences-section.png' width="100%" />
         </Grid>
         <Grid item xs={12} sm={6}>
          <AboutTextBox>
            <CustomSmallHeading>experiences</CustomSmallHeading>
            <CustomTypographySmallHeading>We provide you the best experience</CustomTypographySmallHeading>
            <AboutPera>
              You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
            </AboutPera> 
            <Button variant="outlined" className='common-button common-button-border'>More Info</Button>
          </AboutTextBox>
         </Grid>
      </Grid>
    </>
  );
}

export default ExperiencesModule;
