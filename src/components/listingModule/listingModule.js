import React, { useState } from 'react';
import { Container, Grid, Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import FilterListModule from './component/filterListModule';
import FilterProductModule from './component/filterProductModule';

const ListingModule = () => {
    const [age, setAge] = useState();

    const handleChange = (event) => {
        setAge(event.target.value);
    }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #424242", padding: "20px 0"}}>
            <Typography sx={{fontSize: "20px", fontWeight: "700", lineHeight: "24.2px", letterSpacing: "0.1em"}}>FILTERS</Typography>
            <Typography  sx={{fontSize: "14px", fontWeight: "400", lineHeight: "21px", color: "#E89F71"}}>Clear All</Typography>
          </Box>
          <FilterListModule />
        </Grid>
        <Grid item xs={9}>
            <Box sx={{display: "flex", borderBottom: "1px solid #424242", padding: "20px 0", alignItems: "center", justifyContent: "end"}}>
              <Typography sx={{fontSize: "16px", fontWeight: "500", lineHeight: "24px"}}>Sort by:</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>
            </Box>
            
                <FilterProductModule />
              
            
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListingModule;