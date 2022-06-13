import React from 'react'
import FlippableCard from "flippable-card";
import Box from '@mui/material/Box';

const FlipCard = (props) => {
    return (
        <FlippableCard
            frontComp={
                <Box sx={{
                    backgroundImage: `url(${props.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    {props.name}
                </Box>
            }
            rearComp={
                <Box sx={{
                    backgroundImage: `url(${props.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    {props.description}
                </Box>
            }
        />
    )
}
export default FlipCard;