import React from 'react';
import { Box, Container } from '@mui/material';
import { SectionHeading } from '../style';
import ShopTabs from './ShopTabs';

const ShopByStyle = () => {
  return (
    <Box sx={{padding: "40px 0", backgroundColor: "#FCF8F3"}}>
        <Container>
           <SectionHeading>Shop by Style</SectionHeading>
           <ShopTabs />
        </Container>
    </Box>
  );
}

export default ShopByStyle
