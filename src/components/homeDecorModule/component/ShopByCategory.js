import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { SectionHeading, ViewMoreButton } from '../style';
import ShopByCategoryProduct from './ShopByCategoryProduct';

const ShopByCategoryData = [
    {
        img: "images/homeDecor/shopbycategory1.png",
        catName: "Home Decor"
    },
    {
        img: "images/homeDecor/shopbycategory2.png",
        catName: "Furniture"
    },
    {
        img: "images/homeDecor/shopbycategory3.png",
        catName: "Bedding & Bath"
    },
    {
        img: "images/homeDecor/shopbycategory4.png",
        catName: "Kitchen"
    },
]

const ShopByCategory = () => {
  return (
    <Box sx={{padding: "40px 0", backgroundColor: "#F6F5F3"}}>
       <Container>
           <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
               <SectionHeading>Shop by Factory</SectionHeading>
               <ViewMoreButton variant='text'>View More</ViewMoreButton>
           </Box>

           <Grid container>
            {ShopByCategoryData.map((elm)=>(
                <Grid xs={6} md={3}>
                  <ShopByCategoryProduct img={elm.img} catName={elm.catName} />
                </Grid>
            ))}
           </Grid>
       </Container>
    </Box>
  );
}

export default ShopByCategory;
