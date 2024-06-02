import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { CustomFilterFormBox, FilterDataText, FilterHeading } from '../style';

const FilterListModule = () => {

    const Categories = [
        {
            id: 1,
            name: "Home Decor",
        },
        {
            id: 2,
            name: "Furniture",
        },
    ]

    const SubCategories = [
        {
            id: 1,
            name: "Accent Table"
        },
        {
            id: 2,
            name: "Clocks"
        },
        {
            id: 3,
            name: "Mirrors"
        },
    ]

    const Sizes = [
        {
            id: 1,
            name: "Small"
        },
        {
            id: 2,
            name: "Medium"
        },
        {
            id: 3,
            name: "Large"
        },
    ]

    const Materials = [
        {
            id: 1,
            name: "Metal"
        },
        {
            id: 2,
            name: "Wood"
        }
    ]

    const Price = [
        {
            id: 1,
            name: "FOB"
        },
        {
            id: 2,
            name: "Ex factory"
        }
    ]

    const MOQ = [
        {
            id: 1,
            name: "Less than 10"
        },
        {
            id: 2,
            name: "10-30"
        },
        {
            id: 3,
            name: "30-50"
        },
        {
            id: 4,
            name: ">50"
        },
    ]

    const Color = [
        {
            id: 1,
            name: "Metalic Gray"
        },
        {
            id: 2,
            name: "Metalic  wood"
        }
    ]


  return (
    <>
        <FilterHeading>Categories</FilterHeading>
        {Categories.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>Sub categories</FilterHeading>
        {SubCategories.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>Sizes</FilterHeading>
        {Sizes.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>Materials</FilterHeading>
        {Materials.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>Price</FilterHeading>
        {Price.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>MOQ</FilterHeading>
        {MOQ.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}

        <FilterHeading>Color</FilterHeading>
        {Color.map((catg)=>{
            return(
                <>
                <FormGroup>
                    <CustomFilterFormBox>
                        <FilterDataText>{catg.name}</FilterDataText>
                        <FormControlLabel control={<Checkbox sx={{color: "#E5E5E5", '&.Mui-checked':{color: "#E89F71"}}} />} label="" />
                    </CustomFilterFormBox>
                </FormGroup> 
                </>
            );
        })}
    </>
  );
}

export default FilterListModule;
