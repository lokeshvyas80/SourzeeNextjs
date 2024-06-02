import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import { SectionHeading } from '../style'
import Image from 'next/image';

const logos = [
    {
        img: "/images/homeDecor/existingbuyerslogo1.png",
        alt: "existingbuyerslogo1"
    },
    {
        img: "/images/homeDecor/existingbuyerslogo2.png",
        alt: "existingbuyerslogo2"
    },
    {
        img: "/images/homeDecor/existingbuyerslogo3.png",
        alt: "existingbuyerslogo3"
    },
    {
        img: "/images/homeDecor/existingbuyerslogo4.png",
        alt: "existingbuyerslogo4"
    },
]

const ExistingBuyersLogo = () => {
  return (
    <Box sx={{padding: "40px 0"}}>
      <Container>
        <SectionHeading>Existing Buyers</SectionHeading>
        <Grid container>
        {logos.map((elm)=>(
            <Grid xs={6} md={3}>
                <Image 
                    src={elm.img}
                    width={196}
                    height={90}
                    alt={elm.alt}
                />
            </Grid>
        ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ExistingBuyersLogo
