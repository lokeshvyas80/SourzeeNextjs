import React, { useRef, useState } from 'react';
import { CustomCard, CustomCardBox, CustomCardBoxButton, CustomCardBoxHeadingBig, CustomCardBoxHeadingSmall, CustomTab, CustomTabs, CustomTypographyHeading, ProductSectionDiv } from '../style';
import EastIcon from '@mui/icons-material/East';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Card, Tab, Tabs } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// import './styles.css';


const ProductSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 3,
  };

  return (
    <>
      <ProductSectionDiv>
        <CustomTypographyHeading>Best Selling Product</CustomTypographyHeading>
         
        {/* <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <CustomTabs value={value} onChange={handleChange} centered>
            <CustomTab label="Home Decor" />
            <CustomTab label="Furniture" />
            <CustomTab label="Bedding & Bath" />
            <CustomTab label="Kitchen" />
          </CustomTabs>
        </Box> */}
        <TabContext value={value}>
        <Box>
          <CustomTabs onChange={handleChange} aria-label="lab API tabs example" centered>
            <CustomTab label="Home Decor" value="1" />
            <CustomTab label="Furniture" value="2" />
            <CustomTab label="Bedding & Bath" value="3" />
            <CustomTab label="Kitchen" value="4" />
          </CustomTabs>
        </Box>
        <TabPanel value="1">
        <Slider {...slickSettings} style={{width: "98%"}}>
          <Box>
            <CustomCard>
              <img src='../images/home/product01.png' width="100%"/>  
              <CustomCardBox>
                <CustomCardBoxHeadingSmall>01 - Bed Room</CustomCardBoxHeadingSmall>
                <CustomCardBoxHeadingBig>Home Decor</CustomCardBoxHeadingBig>
                <CustomCardBoxButton variant="contained"><EastIcon style={{color: "#fff"}}/></CustomCardBoxButton>
              </CustomCardBox>
            </CustomCard> 
          </Box>
          <Box>
            <CustomCard>
              <img src='../images/home/product01.png' width="100%"/>  
              <CustomCardBox>
                <CustomCardBoxHeadingSmall>02 - Bed Room</CustomCardBoxHeadingSmall>
                <CustomCardBoxHeadingBig>Home Decor</CustomCardBoxHeadingBig>
                <CustomCardBoxButton variant="contained"><EastIcon style={{color: "#fff"}}/></CustomCardBoxButton>
              </CustomCardBox>
            </CustomCard> 
          </Box>
          <Box>
            <CustomCard>
              <img src='../images/home/product01.png' width="100%"/>  
              <CustomCardBox>
                <CustomCardBoxHeadingSmall>03 - Bed Room</CustomCardBoxHeadingSmall>
                <CustomCardBoxHeadingBig>Home Decor</CustomCardBoxHeadingBig>
                <CustomCardBoxButton variant="contained"><EastIcon style={{color: "#fff"}}/></CustomCardBoxButton>
              </CustomCardBox>
            </CustomCard> 
          </Box>
          <Box>
            <CustomCard>
              <img src='../images/home/product01.png' width="100%"/>  
              <CustomCardBox>
                <CustomCardBoxHeadingSmall>04 - Bed Room</CustomCardBoxHeadingSmall>
                <CustomCardBoxHeadingBig>Home Decor</CustomCardBoxHeadingBig>
                <CustomCardBoxButton variant="contained"><EastIcon style={{color: "#fff"}}/></CustomCardBoxButton>
              </CustomCardBox>
            </CustomCard> 
          </Box>
        </Slider>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
      </TabContext>
        

      

      </ProductSectionDiv>
    </>
  );
}

export default ProductSection
