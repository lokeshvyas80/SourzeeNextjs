import React from 'react'
import { CustomSmallHeading, CustomTypographyHeading, FandqSectionDiv } from '../style';
import { Container, Grid, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FandqModule = () => {

  const FAQsfirstColm = [
    {
      id: 1,
      qustions: "When is a FAQ page appropriate?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 2,
      qustions: "How should I answer my FAQs?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 3,
      qustions: "Can a FAQ section help with SEO?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
      id: 3,
      qustions: "Where should I put my FAQ section?",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
  ]

  return (
    <FandqSectionDiv>
      <Container>
        <CustomSmallHeading sx={{textAlign: "center"}}>Frequently Asked Questions</CustomSmallHeading>
        <CustomTypographyHeading sx={{marginBottom: "40px"}}>FAQ</CustomTypographyHeading>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {FAQsfirstColm.map((faq)=>{
              return (
              <Accordion sx={{borderRadius: "8px !important", boxShadow: "1px 1px 17px 0px #4D4E651F", marginBottom: "17px", borderTop: "none", position: "static"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{faq.qustions}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.ans}</Typography>
                </AccordionDetails>
              </Accordion>
              );
            })}
          </Grid>
          <Grid item xs={6}>
            {FAQsfirstColm.map((faq)=>{
              return (
              <Accordion sx={{borderRadius: "8px !important", boxShadow: "1px 1px 17px 0px #4D4E651F", marginBottom: "17px", borderTop: "none", position: "static"}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{faq.qustions}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.ans}</Typography>
                </AccordionDetails>
              </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </FandqSectionDiv>
  );
}

export default FandqModule;
