import React, { useState } from 'react';
import Head from "next/head";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import ProductDataModule from './productDataModule';


const ProductModule = () => {

  return (
    <>
    <Card sx={{ marginTop: "20px" }}>
         <ProductDataModule />
        <CardContent>
            <Typography gutterBottom variant="h5" 
            sx={{fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                }}>
            Abstract Fish Aluminium Tealights (Set of 2)
            </Typography>
            <Typography sx={{fontSize: "18px", fontWeight: "700", lineHeight: "27px", color: "#E89F71", marginTop: "14px"}}>$879.99</Typography>
            <Typography sx={{fontSize: "14px", fontWeight: "400", lineHeight: "20px", color: "#E89F71", marginTop: "14px"}}>Explore more by this seller</Typography>
            <Typography sx={{fontSize: "14px", fontWeight: "700", lineHeight: "21px", color: "#000", marginTop: "14px"}}>CBM Count 10</Typography>
        </CardContent>
    </Card>

    </>
  );
}

export default ProductModule;