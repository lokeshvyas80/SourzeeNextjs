import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomAccordion, CustomText } from '../style';
import ProductModule from '@/components/listingModule/component/productModule';



const AccordionModule = () => {
  return (
    <>
        <CustomAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>HOW IT'S MADE</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>hello</Typography>
            </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>PRODUCT SPECIFICATIONS</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container>
                    <Grid item xs={4}>
                      <CustomText>Dimensions in Inches or cms</CustomText>
                      <CustomText>Color</CustomText>
                      <CustomText>Material</CustomText>
                      <CustomText>MOQ</CustomText>
                      <CustomText>Finish</CustomText>
                      <CustomText>CBM</CustomText>
                      <CustomText>Gross Weight</CustomText>
                      <CustomText>Net Weight</CustomText>
                    </Grid>
                    <Grid item xs={8}>
                      <CustomText sx={{color: "#111111"}}>5 inch</CustomText>
                      <CustomText sx={{color: "#111111"}}>Grey</CustomText>
                      <CustomText sx={{color: "#111111"}}>Aluminium</CustomText>
                      <CustomText sx={{color: "#111111"}}>Small- 5x3.5x9</CustomText>
                      <CustomText sx={{color: "#111111"}}>Finish</CustomText>
                      <CustomText sx={{color: "#111111"}}>CBM</CustomText>
                      <CustomText sx={{color: "#111111"}}>700 kg</CustomText>
                      <CustomText sx={{color: "#111111"}}>600 kg</CustomText>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>CUSTOMIZATION AVAILABLE</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>hello</Typography>
            </AccordionDetails>
        </CustomAccordion>

        <ProductModule />
    </>
  );
}

export default AccordionModule;
