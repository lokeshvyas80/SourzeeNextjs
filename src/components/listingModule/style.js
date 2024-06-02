import { styled, Typography, Box } from "@mui/material";

export const FilterHeading = styled(Typography)(()=>({
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "21.78px",
    margin: "24px 0 10px 0",
}));

export const CustomFilterFormBox = styled(Box)(()=>({
    display: "flex",
    alignItems: "center",  
    justifyContent: "space-between",
}));

export const FilterDataText = styled(Typography)(()=>({
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
}));

export const FilterSectionHeading = styled(Typography)(()=>({
    fontFamily: "Merriweather",
    fontSize: "28px",
    fontWeight: "400",
    lineHeight: "42px",
    marginTop: "20px",
}));

export const FilterSectionSubHeading = styled(Typography)(()=>({
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: "300",
    lineHeight: "27px",
}));