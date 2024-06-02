import React from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import { SectionHeading, ViewMoreButton } from '../style';
import ShopByFactoryProduct from './ShopByFactoryProduct';

const ShopByFactoryData = [
    {
        img : "images/homeDecor/shopbyfactory1.png/",
        newPrice : "$1,599.99",
        oldPrice : "$2,299.99",
        save : "Save $700 (30%)",
    },
    {
        img : "images/homeDecor/shopbyfactory2.png/",
        newPrice : "$1,599.99",
        oldPrice : "$2,299.99",
        save : "Save $700 (30%)",
    },
    {
        img : "images/homeDecor/shopbyfactory3.png/",
        newPrice : "$1,599.99",
        oldPrice : "$2,299.99",
        save : "Save $700 (30%)",
    },
    {
        img : "images/homeDecor/shopbyfactory4.png/",
        newPrice : "$1,599.99",
        oldPrice : "$2,299.99",
        save : "Save $700 (30%)",
    }
]

const ShopByFactory = () => {
  return (
    <Box sx={{padding: "40px 0"}}>
         <Container>
           <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
               <SectionHeading>Shop by Factory</SectionHeading>
               <ViewMoreButton variant='text'>View More</ViewMoreButton>
           </Box>

            <Grid container spacing={0}>
                {ShopByFactoryData.map((elm)=>(
                    <Grid xs={6} md={3}>
                      <ShopByFactoryProduct img={elm.img} newPrice={elm.newPrice} oldPrice={elm.oldPrice} save={elm.save} />
                    </Grid>
                )
                )}
            </Grid>
         </Container>
    </Box>
  );
}

export default ShopByFactory;
