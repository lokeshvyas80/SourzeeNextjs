import React, { useState } from 'react';
import { Box, Grid, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { CustomTab } from '../style';
import ShopByStyleProductCard from './ShopByStyleProductCard';

// import restAreaHall from "images/homeDecor/rest-area-hall.png"
// import restArea from "images/homeDecor/rest-area.png"


const shopsProduct = [
  {
    img: "images/homeDecor/rest-area-hall.png",
    text: "The Green Dining Chair and the Gold Base Are a Perfect Match."
  },
  {
    img: "images/homeDecor/rest-area.png",
    text: "Express Modern Style with Its Neutral Tones, Clean Lines and ..."
  },
]


const ShopTabs = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <CustomTab label="All" value="1" />
            <CustomTab label="Classic" value="2" />
            <CustomTab label="Modern" value="3" />
            <CustomTab label="Teak Wood" value="4" />
            <CustomTab label="Bamboo" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{padding: "24px 0 0 0"}}>
            <Grid container>
              <Grid xs={6}>
                <ShopByStyleProductCard text={shopsProduct[0].text} img={shopsProduct[0].img}/>
              </Grid>
              <Grid xs={6}>
                <ShopByStyleProductCard text={shopsProduct[1].text} img={shopsProduct[1].img}/>
              </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

export default ShopTabs
