import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image'


// for images
import BannerImage from "public/images/homeDecor/banner.png";
import BannerImage1 from "public/images/homeDecor/banner1.png";
import BannerImage2 from "public/images/homeDecor/banner2.png";

const Banner = () => {
  return (
    <Box sx={{padding: "20px 0"}}>
      <Container>
        <Grid container>
            <Grid xs={12} md={7}>
                <Image
                    src={BannerImage}
                    alt="banner"
                    width="auto"
                    loading="lazy"
                />
            </Grid>
            <Grid xs={12} md={5}>
                <Image
                   src={BannerImage1}
                   alt="banner"
                   width="auto"
                />
                <Image
                   src={BannerImage2}
                   alt="banner"
                   width="auto"
                />
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Banner
