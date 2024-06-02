import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { CustomCard, CustomTypographyShopByFactory } from '../style';

const ShopByFactoryProduct = (props) => {
  return (
    <CustomCard >
        <CardActionArea>
        <CardMedia
            component="img"
            height="300"
            image={props.img}
            alt="green iguana"
        />
        <CardContent>
            <CustomTypographyShopByFactory variant="body2" color="text.secondary">
              <strong style={{fontSize: "14px"}}>{props.newPrice}</strong> &nbsp; <del style={{color: "#ACB2B6"}}>{props.oldPrice}</del> &nbsp; {props.save}
            </CustomTypographyShopByFactory>
        </CardContent>
        </CardActionArea>
    </CustomCard>
  );
}

export default ShopByFactoryProduct;
