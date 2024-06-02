import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Grid,
  styled,
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomTypography, FlexBox, SubmitButton, CustomTextField, CustomOutlinedInput, CustomFormControlLabel, CustomRadio, CustomSelect, ClearButton } from "../style.js"
import Link from "next/link.js";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


const SignUpForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordTwo = () => setShowPasswordTwo((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPasswordTwo = (event) => {
    event.preventDefault();
  };

  // for formik use
  const validationSchema = yup.object().shape({
    companyName: yup.string().required("Company name in required."),
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is required."),
  });

  const onSubmit = () => {
    console.log("values", values);
    // let formData = new FormData();
    // formData.append("email", values.email);
    // formData.append("password", values.password);

    if (values.email === "admin@gmail.com" && values.password === "123456") {
    //   navigate("/");
      toast.success("login successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Please enter valid credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      companyName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });
  return (
    <>
        <Box
        sx={{
            padding: "20px"
        }}>
         <Box sx={{textAlign: "right"}}>
          <CloseIcon style={{fontSize: "30px", cursor: "pointer"}} onClick={()=> router.push("/")} />
         </Box>
        <Box
          sx={{
            background: "#fff",
            margin: "0 auto",
          }}
        >
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                  <CustomTypography variant="h3">Sign up for free</CustomTypography>
                  
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <Typography sx={{
                        fontSize: "18px",
                        fontWeight: "400",
                        color: "#ACB2B6",
                     }}
                    >Please select</Typography>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="BuyFromSourcezee" control={<CustomRadio />} label="Buy From Sourcezee" />
                            <FormControlLabel value="SellOnSourcezee" control={<CustomRadio />} label="Sell On Sourcezee" />
                        </RadioGroup>
                    </FormControl>
                  </Box>
                  </Grid>
                  
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.companyName && touched.companyName}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Company Name*"  
                        id="companyName"
                        value={values.companyName}
                        onChange={handleChange}
                        isInvalid={!!errors.companyName && touched.companyName}
                        error={!!errors.companyName && touched.companyName}
                        label="Company Name"
                        />
                        <FormHelperText>{errors.companyName}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.firstName && touched.firstName}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="First Name*"  
                        id="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName && touched.firstName}
                        error={!!errors.firstName && touched.firstName}
                        label="First Name"
                        />
                        <FormHelperText>{errors.firstName}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.lastName && touched.lastName}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Last Name*"  
                        id="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName && touched.lastName}
                        error={!!errors.lastName && touched.lastName}
                        label="Last Name*"
                        />
                        <FormHelperText>{errors.lastName}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.phone && touched.phone}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Phone*"  
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone && touched.phone}
                        error={!!errors.phone && touched.phone}
                        label="Phone*"
                        />
                        <FormHelperText>{errors.phone}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.fax && touched.fax}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Fax"  
                        id="fax"
                        value={values.fax}
                        onChange={handleChange}
                        isInvalid={!!errors.fax && touched.fax}
                        error={!!errors.fax && touched.fax}
                        label="Fax"
                        />
                        <FormHelperText>{errors.fax}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.address1 && touched.address1}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="address1"  
                        id="address1"
                        value={values.address1}
                        onChange={handleChange}
                        isInvalid={!!errors.address1 && touched.address1}
                        error={!!errors.address1 && touched.address1}
                        label="address1"
                        />
                        <FormHelperText>{errors.address1}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.address2 && touched.address2}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="address2"  
                        id="address2"
                        value={values.address2}
                        onChange={handleChange}
                        isInvalid={!!errors.address2 && touched.address2}
                        error={!!errors.address2 && touched.address2}
                        label="address2"
                        />
                        <FormHelperText>{errors.address2}</FormHelperText>
                    </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={3}>
                    <FormControl 
                      fullWidth
                      error={!!errors.country && touched.country}
                      >
                    <CustomSelect 
                        label='Country' 
                        defaultValue='country1'
                        id="country"
                        value={values.country}
                        onChange={handleChange}
                        isInvalid={!!errors.country && touched.country}
                        error={!!errors.country && touched.country}
                     >
                        <MenuItem value='country1'>Country1</MenuItem>
                        <MenuItem value='country2'>Country2</MenuItem>
                        <MenuItem value='country3'>Country3</MenuItem>
                        <MenuItem value='country3'>Country4</MenuItem>
                        <MenuItem value='country4'>Country5</MenuItem>
                    </CustomSelect>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.city && touched.city}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="City*"  
                        id="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={!!errors.city && touched.city}
                        error={!!errors.city && touched.city}
                        label="City*"
                        />
                        <FormHelperText>{errors.city}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.state && touched.state}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="State / Province*"  
                        id="state"
                        value={values.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state && touched.state}
                        error={!!errors.state && touched.state}
                        label="State / Province*"
                        />
                        <FormHelperText>{errors.state}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.zip && touched.zip}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Zip*"  
                        id="zip"
                        value={values.zip}
                        onChange={handleChange}
                        isInvalid={!!errors.zip && touched.zip}
                        error={!!errors.zip && touched.zip}
                        label="Zip*"
                        />
                        <FormHelperText>{errors.zip}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.taxId && touched.taxId}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Tax ID / EIN*"  
                        id="taxId"
                        value={values.taxId}
                        onChange={handleChange}
                        isInvalid={!!errors.taxId && touched.taxId}
                        error={!!errors.taxId && touched.taxId}
                        label="Tax ID / EIN*"
                        />
                        <FormHelperText>{errors.taxId}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.website && touched.website}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Website"  
                        id="website"
                        value={values.website}
                        onChange={handleChange}
                        isInvalid={!!errors.website && touched.website}
                        error={!!errors.website && touched.website}
                        label="Website"
                        />
                        <FormHelperText>{errors.website}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.email && touched.email}
                    >
                        {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Email*"  
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email && touched.email}
                        error={!!errors.email && touched.email}
                        label="Email*"
                        />
                        <FormHelperText>{errors.email}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.confirmEmail && touched.confirmEmail}
                    >
                        {/* <InputLabel htmlFor="confirmEmail">confirmEmail</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Confirm Email*"  
                        id="confirmEmail"
                        value={values.confirmEmail}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmEmail && touched.confirmEmail}
                        error={!!errors.confirmEmail && touched.confirmEmail}
                        label="confirmEmail*"
                        />
                        <FormHelperText>{errors.confirmEmail}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.password && touched.password}
                    >
                        {/* <InputLabel htmlFor="password">Password</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="Password*"  
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password && touched.password}
                        error={!!errors.password && touched.password}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        />
                        <FormHelperText>{errors.password}</FormHelperText>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl
                        sx={{width: "100%" }}
                        variant="outlined"
                        error={!!errors.confirmPassword && touched.confirmPassword}
                    >
                        {/* <InputLabel htmlFor="confirmPassword">confirmPassword</InputLabel> */}
                        <CustomOutlinedInput
                        placeholder="confirm Password*"  
                        id="confirmPassword"
                        type={showPasswordTwo ? "text" : "password"}
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                        error={!!errors.confirmPassword && touched.confirmPassword}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPasswordTwo}
                                onMouseDown={handleMouseDownPasswordTwo}
                                edge="end"
                            >
                                {showPasswordTwo ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                            </InputAdornment>
                        }
                        label="Confirm Password*"
                        />
                        <FormHelperText>{errors.confirmPassword}</FormHelperText>
                    </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                    <ReCAPTCHA
                      // ref={reCaptchaRef}
                      sitekey={TEST_SITE_KEY}
                      // onChange={(value) => {
                      //   setFieldValue("recaptcha", value);
                      // }}
                      // isInvalid={!!errors.recaptcha && touched.recaptcha}
                    />
                    </Grid>
                  </Grid>
                  
                  <Typography sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19px",
                    marginTop: "10px",
                  }}>
                  All * fields are mendatory
                  </Typography>
                  

                  <FlexBox justifyContent="space-between">
                     <CustomFormControlLabel control={<Checkbox defaultChecked />} label="Standard T&C * apply, please check the box to proceed." />
                  </FlexBox>

                  <FlexBox>
                    <ClearButton variant="outlined">Clear</ClearButton>
                    <SubmitButton type="submit" variant="contained">
                      Create account
                    </SubmitButton>
                  </FlexBox>

                  <Typography
                      sx={{ 
                            color: "#ACB2B6",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: "400",
                            textDecoration: "none",
                            textAlign: "left",
                            marginTop: "10px",
                            }}>
                            Already have an account? 
                    <Link
                        href="/account/signin"
                        style={{color: "#000"}}
                      >
                         Sign In here
                      </Link>
                    </Typography>

                  <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
              </Box>
        </Box>
        </Box>
    </>
  );
};

export default SignUpForm;