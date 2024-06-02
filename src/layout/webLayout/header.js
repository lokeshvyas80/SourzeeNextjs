import React from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from 'next/link';


const pages = [
  {
    name: "Home Decor",
    link: "homeDecor"
  },
  {
    name: "About Us",
    link: "about"
  },
  {
    name: "Services",
    link: "#"
  },
  {
    name: "Products",
    link: "product-details"
  },
  {
    name: "Product Listing",
    link: "listing"
  }
]



const CustomButton = styled(Button)(({ theme }) => ({
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

const CustomButtonSecond = styled(Button)(({ theme }) => ({
    fontFamily: "'Inter', serif",
    padding: "12px 34px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "26px",
    textTransform: "capitalize",
    borderColor: "#E89F71",
    borderRadius: "24px",
    color: "#000",
    "&:hover":{
        borderColor: "#E89F71",
    }
}))

const CustomButtonForMenu = styled(Button)(({ theme }) => ({
    fontFamily: "'Inter', serif",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "22px",
    color: "#111111",
    backgroundColor: "#fff",
    textTransform: "capitalize",
    marginRight: "30px",
    "&:hover":{
      color: "#E89F71",
      backgroundColor: "#fff",
    }
}));

const WebHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0000", boxShadow: "none", color: "#3734A9" }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              borderBottom: "1px solid #FFFFFF",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                <Link href="/">
                  <img src="../images/logoWhite.png" alt="logo" />
                </Link>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((elm, index) => (
                  <Link href="#">
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{elm.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src="../images/logoWhite.png" alt="logo" width="100" />
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((elm, index) => (
                <Link href={elm.link}>
                  <CustomButtonForMenu
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "rgba(55, 52, 169, 1)", display: "block" }}
                  >
                    
                      {elm.name}
                  </CustomButtonForMenu>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <Link href="account/signup">
                <CustomButtonSecond variant="outlined">
                  Sign up
                </CustomButtonSecond>
              </Link>
              <Link href="account/signin">
                <CustomButton variant="contained">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z" fill="white"/>
                  </svg>
                Login
                </CustomButton>
              </Link> 
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default WebHeader;