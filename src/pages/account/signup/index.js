import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import SignUpForm from '@/components/accountModule/signup/SignUpForm';

const Customfont = styled(Box)(({theme})=>({
    fontFamily: "'Merriweather', serif",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",
    textalign: "center",
    color: "#fff",
}))

const SignUp = () => {
  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Box
            sx={{
                backgroundImage: "url(../images/log-in.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                width: "50%",
                height: "100vh",
                position: "fixed",
            }}
            >
               <Box sx={{
                position: "absolute",
                top: "18%",
                left: "8%",
                textAlign: "center",
                padding: "26px",
               }}>
                <img src='../images/login-logo.png' width="240" />
                <Customfont>“Berbagai kebutuhan interior rumah anda”</Customfont>
                <Typography sx={{
                    fontWeight: "400",
                    fontSize: "25px",
                    color: "#fff",
                    marginTop: "20px",
                }}>Sourcezee.com</Typography>
               </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <SignUpForm />
        </Grid>
       </Grid>
    </Box>
    </React.Fragment>
  )
}

export default SignUp;
