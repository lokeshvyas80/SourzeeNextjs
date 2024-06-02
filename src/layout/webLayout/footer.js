import React from 'react';
import { CustomfooterFont, CustomfooterHeading, FooterSection } from './style';
import { Container, Grid } from '@mui/material';
import Link from 'next/link';

const WebFooter = () => {
  return (
    <>
      <FooterSection>
        <Container>
         <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <img src='../images/login-logo.png' alt='footer-logo' width="100" />
                <CustomfooterFont>One stop shop for all your sourcing needs</CustomfooterFont>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomfooterHeading>Information</CustomfooterHeading>
              <Link href="#" style={{textDecoration: "none"}}>
                <CustomfooterFont>About us</CustomfooterFont>
              </Link>
              <Link href="#" style={{textDecoration: "none"}}>
                <CustomfooterFont>Blog</CustomfooterFont>
              </Link>
              <Link href="#" style={{textDecoration: "none"}}>
                <CustomfooterFont>Sitemap</CustomfooterFont>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomfooterHeading>Policy</CustomfooterHeading>
              <Link href="#" style={{textDecoration: "none"}}>
                <CustomfooterFont>Terms & conditions</CustomfooterFont>
              </Link>
              <Link href="#" style={{textDecoration: "none"}}>
                <CustomfooterFont>Privacy policy</CustomfooterFont>
              </Link>
            </Grid>
            <Grid item xs={12} sm={3}>
              <CustomfooterHeading>Contact Us</CustomfooterHeading>
              <CustomfooterFont>For any queries, email us at contact@sourcezee.com</CustomfooterFont>
            </Grid>
         </Grid>
        </Container>
      </FooterSection>
    </>
  );
}

export default WebFooter
