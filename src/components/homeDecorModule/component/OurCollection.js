import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ProductHoverBox, SectionHeading } from '../style';
import Image from 'next/image';

// Images
import Product1 from "public/images/homeDecor/product/product1.png"
import Product2 from "public/images/homeDecor/product/product2.png"
import Product3 from "public/images/homeDecor/product/product3.png"
import Product4 from "public/images/homeDecor/product/product4.png"
import Product5 from "public/images/homeDecor/product/product5.png"
import Product6 from "public/images/homeDecor/product/product6.png"
import Product7 from "public/images/homeDecor/product/product7.png"
import Product8 from "public/images/homeDecor/product/product8.png"


const Products = [
    {
        name: "Tv Stands",
        img: Product1,
    },
    {
        name: "Dining Tables",
        img: Product2,
    },
    {
        name: "Desk",
        img: Product3,
    },
    {
        name: "Coffee Tables",
        img: Product4,
    },
    {
        name: "Sofas",
        img: Product5,
    },
    {
        name: "Outdoor",
        img: Product6,
    },
    {
        name: "Sideboards & Buffets",
        img: Product7,
    },
    {
        name: "Bathrooms Vanities",
        img: Product8,
    },
]

const OurCollection = () => {
  return (
    <>
      <Box sx={{padding: "40px 0"}}>
          <Container>
            <SectionHeading>Our Collection</SectionHeading>
            <Grid container>
                {Products.map((elm)=> {
                    return(
                        <Grid xs={6} md={3}>
                            <ProductHoverBox>
                                <Image
                                    src={elm.img}
                                    height={160}
                                />
                                <Typography variant='h6'>{elm.name}</Typography>
                            </ProductHoverBox>
                        </Grid>
                    );
                })}
            </Grid>
          </Container>
      </Box>
    </>
  );
}

export default OurCollection;
