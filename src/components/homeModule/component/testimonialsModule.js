import React from 'react';
import { CustomSmallHeading, CustomTypographyHeading, TestimonialsSectionDiv } from '../style';
import { Container, Grid } from '@mui/material';
import TestimonialsCards from './TestimonialsCards';

const TestimonialsModule = () => {
  return (
    <TestimonialsSectionDiv>
      <Container>
        <CustomSmallHeading sx={{textAlign: "center"}}>Testimonials</CustomSmallHeading>
        <CustomTypographyHeading sx={{marginBottom: "60px"}}>Our Client Reviews</CustomTypographyHeading>
        
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TestimonialsCards/>
            </Grid>
            <Grid item xs={4}>
              <TestimonialsCards/>
            </Grid>
            <Grid item xs={4}>
              <TestimonialsCards/>
            </Grid>
          </Grid>
        
      </Container>
    </TestimonialsSectionDiv>
  )
}

export default TestimonialsModule;
