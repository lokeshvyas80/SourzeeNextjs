import { Box, styled, Button, Typography, OutlinedInput, Select, Accordion } from "@mui/material";

export const TopStripSection = styled(Box)(()=>({
   width: "100%",
   background: "#F6F5F3",
   borderRadius: "8px",
   padding: "15px 20px",
   borderBottom: "4px solid #E5E5E5",
}));

export const CustomDivStrip = styled(Box)(()=>({
   display: "flex",
   alignItems: "center",
   justifyContent: "space-around",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
    fontFamily: "'Inter', serif",
    padding: "12px 34px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#FFFFFF",
    textTransform: "capitalize",
    background: "#E89F71",
    borderRadius: "24px",
    "&:hover":{
      background: "#E89F71",
    }
  }));

export const ProductName = styled(Typography)(()=>({
   fontFamily: "Merriweather",
   fontSize: "20px",
   fontWeight: "400",
   lineHeight: "30px",
   color: "#111111",
}));

export const SignInBox = styled(Box)(()=>({
   backgroundColor: "#F6F5F3",
   borderRadius: "8px",
   borderBottom: "4px solid #E5E5E5",
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   width: "55%",
   marginTop: "14px",
}));

export const CustomLabel = styled(Typography)(()=>({
   fontFamily: "Inter",
   fontSize: '14px',
   fontWeight: '400',
   lineHeight: "16.94px",
   color: "#111111",
}));

export const CustomTextField = styled(OutlinedInput)(()=>({
   border: "2px solid #E5E5E5",
   borderRadius: "4px",
   margin: "8px 0 0 0 !important",
   outline: "none",
   "&:hover fieldset": {
      border: "2px solid #E5E5E5 !important",
   },
   "&.Mui-focused fieldset": {
      border: "2px solid #E5E5E5 !important",
   },
   "&.MuiOutlinedInput-root": {
      "& fieldset": {
         border: "2px solid #E5E5E5 !important",
      },
   },
}));

export const CustomSelectField = styled(Select)(()=>({
   border: "2px solid #E5E5E5",
   borderRadius: "4px",
   margin: "8px 0 0 0 !important",
   outline: "none",
   "&:hover fieldset": {
      border: "2px solid #E5E5E5 !important",
   },
   "&.Mui-focused fieldset": {
      border: "2px solid #E5E5E5 !important",
   },
   "&.MuiOutlinedInput-root": {
      "& fieldset": {
         border: "2px solid #E5E5E5 !important",
      },
   },
}));

export const SubmitButtonDiv = styled(Box)(()=>({
   display: "flex",
   marginTop: "64px",
}));

export const SectionDiv = styled(Box)(()=>({
   padding: "50px 0",
}));

export const CustomAccordion = styled(Accordion)(()=>({
   position: "static", 
   background: "none", 
   boxShadow: "none",
   borderBottom: "1px solid #E5E5E5", 
   borderRadius: "0",
}));

export const CustomText = styled(Typography)(()=>({
   fontFamily: "Inter",
   fontSize: "16px",
   fontWeight: "400",
   lineHeight: "20px",
   color: "#828282",
   marginBottom: "16px",
}));