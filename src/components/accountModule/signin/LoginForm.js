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
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomTypography, FlexBox, SubmitButton, CustomTextField, CustomOutlinedInput, CustomFormControlLabel } from "../style.js"
import Link from "next/link.js";
import { useRouter } from "next/router";


const LoginForm = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // for formik use
  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
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
            padding: "60px"
        }}>
         <Box sx={{textAlign: "right"}}>
          <CloseIcon style={{fontSize: "30px", cursor: "pointer"}} onClick={()=> router.push("/")} />
         </Box>
        <Box
          sx={{
            // width: "800px",
            background: "#fff",
            margin: "0 auto",
            padding: "40px",
            // boxShadow: 3,
            // borderRadius: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Stack spacing={2}>
                  <CustomTypography variant="h3">Sign In</CustomTypography>
                  <FormControl
                    sx={{ m: 0, width: "100%" }}
                    variant="outlined"
                    error={!!errors.email && touched.email}
                  >
                    {/* <InputLabel htmlFor="email">Email</InputLabel> */}
                    <CustomOutlinedInput
                      placeholder="Email Address*"  
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email && touched.email}
                      error={!!errors.email && touched.email}
                      label="Email"
                    />
                    <FormHelperText>{errors.email}</FormHelperText>
                  </FormControl>

                  <FormControl
                    sx={{ m: 1, width: "100%" }}
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

                  <FlexBox justifyContent="space-between">
                     <CustomFormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                      <Link
                        href="/forgot-password"
                        style={{ 
                            color: "#ACB2B6",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: "400",
                            textDecoration: "none",
                            }}
                      >
                        Forgot password?
                      </Link>
                    </FlexBox>

                  <SubmitButton type="submit" variant="contained">
                    log in
                  </SubmitButton>

                  <Link
                        href="/account/signup"
                        style={{ 
                            color: "#ACB2B6",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontWeight: "400",
                            textDecoration: "none",
                            textAlign: "center",
                            }}
                      >
                        Don't have an account? Sign up here
                      </Link>


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
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </Box>
    </>
  );
};

export default LoginForm;