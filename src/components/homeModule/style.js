import { TabList } from "@mui/lab";
import { Box, Card, Typography, styled, Button, Tabs, Tab } from "@mui/material";

export const AboutTextBox = styled(Box)(() => ({
    padding: "120px 60px 120px 120px",
}));

export const AboutPera = styled(Typography)(() => ({
    fontFamily: "'Inter', serif",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "36px",
    textAlign: "left",
}));

export const ProductSectionDiv = styled(Box)(() => ({
    backgroundColor: "#FCF8F3",
    padding: "40px 0",
}));

export const CustomTypographyHeading = styled(Typography)(() => ({
    fontFamily: "'Merriweather', serif",
    fontSize: "42px",
    fontWeight: "700",
    lineHeight: "53px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#1E1E1E",
    textTransform: "capitalize",
}));

export const CustomTypographySmallHeading = styled(Typography)(()=>({
    fontFamily: "'Merriweather', serif",
    fontSize: "42px",
    fontWeight: "700",
    lineHeight: "53px",
    letterSpacing: "0em",
    color: "#1E1E1E",
    textTransform: "capitalize",
}));


export const CustomCard = styled(Card)(() => ({
   borderRadius: "20px",
   margin: "0 20px",
   position: "relative",
}));

export const CustomCardBox = styled(Box)(() => ({
  backgroundColor: "#FFFFFFB8",
//   backgroundColor: "#000",
  padding: "20px",
  position: "absolute",
  bottom: "26px",
  left: "30px",
  borderRadius: "10px",
  cursor: "pointer",
}));

export const CustomCardBoxHeadingSmall = styled(Typography)(() => ({
    fontFamily: "'Inter', serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    color: "#616161",
}));

export const CustomCardBoxHeadingBig = styled(Typography)(() => ({
    fontFamily: "'Inter', serif",
    fontSize: "28px",
    fontWeight: "600",
    lineHeight: "33px",
    color: "#3A3A3A",
}));

export const CustomCardBoxButton = styled(Button)(() => ({
    backgroundColor: "#E89F71",
    position: "absolute",
    borderRadius: "0 10px 10px 0",
    right: "-64px",
    bottom: "16px",
    "&:hover":{
        backgroundColor: "#E89F71",
    },
}));

export const CustomTabs = styled(TabList)(()=>({
    fontFamily: "'Inter', serif",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    textAlign: "left",
    
}));

export const CustomTab = styled(Tab)(()=>({
    fontFamily: "'Inter', serif",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    textAlign: "left",
    textTransform: "capitalize",
    color: "#111111",
}));

export const NetworkSectionDiv = styled(Box)(()=>({
   backgroundColor: "#fff",
   padding: "40px 0",
}));

export const IconBox = styled(Box)(()=>({
  textAlign: "center",
  marginTop: "57px",
}));

export const IconBoxHeading = styled(Typography)(()=>({
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19.36px",
    textAlign: "center",
    marginTop: "15px",
    textTransform: "capitalize",
}));

export const IconBoxPara = styled(Typography)(()=>({
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19.36px",
    textAlign: "center",
    textTransform: "capitalize",
}));

export const SmallText = styled(Typography)(()=>({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21.78px",
    letterSpacing: "0.175em",
    textAlign: "left",
}));

export const CustomSmallHeading = styled(Typography)(()=>({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21.78px",
    letterSpacing: "0.175em",
    textAlign: "left",
    textTransform: "uppercase",
    color: "#E58411",
    marginBottom: "20px",
}));

export const TestimonialsSectionDiv = styled(Box)(()=>({
    backgroundColor: "#fff",
    padding: "40px 0",
}));

export const FandqSectionDiv = styled(Box)(()=>({
    backgroundColor: "#FCF8F3",
    padding: "40px 0",
}));