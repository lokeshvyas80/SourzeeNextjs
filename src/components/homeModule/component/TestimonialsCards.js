import React, { useState } from 'react';
import { Box, Typography, Rating, Avatar } from '@mui/material';

const TestimonialsCards = () => {

  const [value, setValue] = useState(4);

  return (
    <>
      <Box 
       sx={{
        backgroundImage: `url("images/home/cards.png")`,
        backgroundRepeat: "no-repeat",
        padding: "18px",
        width: "100%",
       }}>
         <Box
         sx={{
            backgroundColor: "#fff",
            borderRadius: "18px",
            textAlign: "center",
            padding: "17px 45px",
            position: "relative",
            marginTop: "226px",
         }}>
            <Box sx={{background: "#fff", position: "absolute", top: "-38px", right: "43%", width: "60px", height: "60px", borderRadius: "50%", padding: "9px"}}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{display: "inline-flex"}} />
            </Box>
            <Typography 
            variant="h3"
            sx={{
                marginTop: "16px",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "21.78px",
            }}>
            Bang Upin</Typography>
            <Typography sx={{fontSize: "12px",}}>Pedagang Asongan</Typography>
            <Typography 
            sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "16.94px",
                margin: "22px 0",
            }}>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</Typography>
             <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
         </Box>
      </Box>
    </>
  );
}

export default TestimonialsCards;
