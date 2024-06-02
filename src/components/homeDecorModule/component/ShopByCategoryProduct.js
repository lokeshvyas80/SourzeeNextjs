import React from 'react';
import { CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CustomCard } from '../style';

const ShopByCategoryProduct = ({img, catName}) => {
  return (
    <CustomCard >
        <CardActionArea>
        <CardMedia
            component="img"
            height="300"
            image={img}
            alt="Category Image"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
              {catName}
            </Typography>
        </CardContent>
        </CardActionArea>
    </CustomCard>
  );
}

export default ShopByCategoryProduct;
