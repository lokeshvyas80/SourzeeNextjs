import { Box, Typography, styled } from "@mui/material";

export const FooterSection = styled(Box)(() => ({
    backgroundColor: "#111111",
    width: "100%",
    padding: "60px 0",
}));

export const CustomfooterFont = styled(Typography)(() => ({
    fontFamily: "'Inter', serif",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "29px",
    textAlign: "left",
    color: "#FFFFFF",
}));

export const CustomfooterHeading = styled(Typography)(() =>({
    fontFamily: "'Inter', serif",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "32px",
    textAlign: "left",
    color: "#FFFFFF",
}));
