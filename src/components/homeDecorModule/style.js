import { Box, Tab, styled, Typography, Card, Button } from "@mui/material";


export const ProductHoverBox = styled(Box)(() => ({
    textAlign: "center",
    padding: "0 0 30px 0",
    margin: "0 0 20px 0",
    borderRadius: "4px",
    "&:hover":{
       boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    },
}));

export const SectionHeading = styled(Box)(()=> ({
    fontFamily: "Merriweather",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: "45px",
    textAlign: "left",
    marginBottom: "24px",
}));

export const CustomTab = styled(Tab)(()=>({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    color: "#000",
    border: "1px solid #ACB2B6",
    borderRadius: "36px",
    padding: "10px 30px",
    marginRight: "20px",
    "&.Mui-selected":{
        color: "#E89F71",
        border: "1px solid #E89F71",
    },
    "&.MuiTabs-indicator":{
        display: "none",
    }
}));

export const CustomTypographyCard = styled(Typography)(()=>({
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: "300",
    lineHeight: "24px",
    color: "#111111",
}));

export const CustomTypographyShopByFactory = styled(Typography)(()=>({
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "21px",
    color: "#D01212",
}));

export const CustomCard = styled(Card)(()=>({
    borderRadius: "8px",
    boxShadow: "0px 4px 8px 0px #0000001A",
    marginRight: "10px",
}));

export const ViewMoreButton = styled(Button)(()=>({
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "21px",
    color: "#E89F71",
    borderBottom: "2px solid #E89F71",
    borderRadius: "0",
    "&:hover":{
        backgroundColor: "transparent",
    }
}));
