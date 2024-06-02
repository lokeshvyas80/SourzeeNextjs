import { Box, Button, FormControlLabel, OutlinedInput, Radio, Select, TextField, Typography, styled } from "@mui/material";

export const CustomTypography = styled(Typography)(() => ({
  fontFamily: "'Merriweather', serif",
  fontSize: "36px",
  fontWeight: "700",
  lineHeight: "45px",
  letterSpacing: "0em",
  textAlign: "center",
}));

export const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const SubmitButton = styled(Button)(() => ({
    fontFamily: "'Inter', serif",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "22px",
    textAlign: "center",
    padding:"16px",
    width: "100%",
    background: "#E89F71",
    borderRadius: "104px",
    "&:hover": {
      background: "#E89F71",
    },
}));
export const ClearButton = styled(Button)(() => ({
  fontFamily: "'Inter', serif",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "22px",
  textAlign: "center",
  padding:"16px",
  width: "100%",
  color: "#E89F71",
  borderRadius: "104px",
  borderColor: "#E89F71",
  "&:hover": {
  borderColor: "#E89F71",
  // background: "#E89F71",
    // color: "#fff",
  },
}));


export const CustomOutlinedInput = styled(OutlinedInput)(() => ({
  border: "2px solid #E5E5E5",
  borderRadius: "104px",
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

export const CustomSelect = styled(Select)(()=>({
  border: "2px solid #E5E5E5",
  borderRadius: "104px",
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
}))

export const CustomFormControlLabel = styled(FormControlLabel)(()=>({
    ".MuiFormControlLabel-label":{
        fontFamily: "'Inter', serif",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "17px",
        textAlign: "left",
        color: "#ACB2B6",
    }
}))


export const CustomRadio = styled(Radio)(()=>({
  "& .MuiSvgIcon-root": {
    fontSize: 28,
    color: "#E89F71",
    "&.Mui-checked": {
      color: "#E89F71",
    },
  },
}))
