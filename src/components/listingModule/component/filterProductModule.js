import React from 'react';
import { FilterSectionHeading, FilterSectionSubHeading } from '../style';
import ProductModule from './productModule';
import { Grid } from "@mui/material";

const FilterProductModule = () => {
  return (
    <>
      <FilterSectionHeading>Home accents & decor</FilterSectionHeading>
      <FilterSectionSubHeading>Wholesale home decor, lighting, ornaments, wall art, candlesticks and garden accessories</FilterSectionSubHeading>
           <Grid container spacing={2}>
              <Grid item xs={4}>
                <ProductModule />
              </Grid>
              <Grid item xs={4}>
                <ProductModule />
              </Grid>
              <Grid item xs={4}>
                <ProductModule />
              </Grid>
            </Grid>
    </>
  );
}

export default FilterProductModule
