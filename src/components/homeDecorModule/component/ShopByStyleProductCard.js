import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CustomCard, CustomTypographyCard } from '../style';


const ShopByStyleProductCard = (prop) => {
    
  return (
    <CustomCard>
        <CardActionArea>
        <CardMedia
            component="img"
            height="300"
            image={prop.img}
            alt="green iguana"
        />
        <CardContent>
            <CustomTypographyCard variant="body2" color="text.secondary">
              {prop.text}
            </CustomTypographyCard>
        </CardContent>
        </CardActionArea>
    </CustomCard>
  );
}

export default ShopByStyleProductCard
