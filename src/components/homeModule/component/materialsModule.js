import React from 'react';
import { Button, Grid } from '@mui/material';
import { AboutPera, AboutTextBox, CustomSmallHeading, CustomTypographySmallHeading } from '../style';

const MaterialsModule = () => {
  return (
    <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
          <AboutTextBox>
            <CustomSmallHeading>Materials</CustomSmallHeading>
            <CustomTypographySmallHeading>Very serious materials for making furniture</CustomTypographySmallHeading>
            <AboutPera>
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
            </AboutPera> 
            <Button variant="outlined" className='common-button common-button-border'>More Info</Button>
          </AboutTextBox>
         </Grid>
         <Grid item xs={12} sm={6}>
          <img src='../images/home/materials-section.png' width="100%" />
         </Grid>
      </Grid>
  )
}

export default MaterialsModule
