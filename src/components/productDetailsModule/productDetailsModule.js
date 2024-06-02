import React from 'react';
import TopStripModule from './component/topStripModule';
import { Box, Container, Grid } from "@mui/material";
import ProductModule from './component/productModule';
import ProductForm from './component/productForm';
import { SectionDiv } from './style';
import AccordionModule from './component/accordionModule';

const ProductDetailsModule = () => {
  return (
    <>
    <SectionDiv>
      <Container>
        <TopStripModule/>
        <Grid container spacing={2} sx={{marginTop: "35px"}}>
          <Grid item xs={6}>
              <ProductModule />
          </Grid>
          <Grid item xs={6}>
            <ProductForm />
          </Grid>
        </Grid>
      </Container>
    </SectionDiv>
    <SectionDiv sx={{backgroundColor: "#F6F5F3"}}>
      <Container>
         <AccordionModule />
      </Container>
    </SectionDiv>
    </>
  );
}

export default ProductDetailsModule;
