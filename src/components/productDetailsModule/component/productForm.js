import React from 'react';
import { ProductName, SignInBox, CustomTextField, CustomLabel, CustomSelectField, CustomButton, SubmitButtonDiv } from '../style';
import { Typography, Button, Grid, Box, FormControl, MenuItem } from '@mui/material';

const ProductForm = () => {
  return (
    <>
      <ProductName>Antique aluminium cacti tabletop decor (set of 2)</ProductName>
      <SignInBox>
        <Typography sx={{fontWeight: "400", fontSize: "14px", color: "#111111", padding: "10px 18px"}}>To reveal price please sign in / sign up</Typography>
        <Button variant="contained" sx={{borderRadius: "8px", backgroundColor: "#E89F71", padding: "18px"}}>
            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0H0V27.4749H30V0Z" fill="white" fill-opacity="0.01"/>
                <path d="M14.9948 3.43433H3.75V24.0405H15" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.625 18.889L26.25 13.7375L20.625 8.58594" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13.7329H26.25" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Button>
      </SignInBox>

        <Box
            component="form"
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
        >
            <Grid container spacing={2} sx={{marginTop: "25px"}} alignItems="flex-end">
                <Grid item xs={6}>
                    <CustomLabel>Quantity</CustomLabel>
                    <FormControl
                        sx={{ m: 0, width: "100%" }}
                        variant="outlined"
                    >
                      <CustomTextField />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{fontSize: "12px", fontWeight: "300"}}>*For large quantities, please submit the 'get quote' form for unbeatable prices!</Typography>
                </Grid>

                <Grid item xs={6}>
                    <CustomLabel>Color</CustomLabel>
                    <FormControl
                        sx={{ m: 0, width: "100%" }}
                        variant="outlined"
                    >
                      <CustomSelectField>
                        <MenuItem value={10}>Gold</MenuItem>
                        <MenuItem value={20}>Silver</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </CustomSelectField>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                <CustomLabel>Size (inch)</CustomLabel>
                    <FormControl
                        sx={{ m: 0, width: "100%" }}
                        variant="outlined"
                    >
                      <CustomSelectField>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </CustomSelectField>
                    </FormControl>
                </Grid>
            </Grid>
            <SubmitButtonDiv>
              <CustomButton variant="contained" sx={{textTransform: "uppercase", marginRight: "20px"}}>get quote</CustomButton>
              <CustomButton variant="contained" sx={{textTransform: "uppercase"}}>add to cart</CustomButton>
            </SubmitButtonDiv>
        </Box>
    </>
  );
}

export default ProductForm
