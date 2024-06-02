import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { AboutPera, AboutTextBox } from '../style';

const AboutUsSection = () => {
  return (
    <>
      <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
          <AboutTextBox>
            <AboutPera>
              We are tech-powered sourcing and supply chain platform 
              for buyers and manufacturers in the Furniture, 
              Home Textile and Fashion. Our solutions facilitate smart, 
              transparent, and sustainable approach to do business.
            </AboutPera> 
            <Button variant="contained" className='common-button'>About Us</Button>
          </AboutTextBox>
         </Grid>
         <Grid item xs={12} sm={6}>
          <img src='../images/home/about-section.png' width="100%" />
         </Grid>
      </Grid>
    </>
  );
}

export default AboutUsSection
