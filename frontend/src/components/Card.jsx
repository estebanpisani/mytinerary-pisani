import React from 'react'
import FlippableCard from "flippable-card";

const Card = (props) => {
    return (
        <FlippableCard frontComp={<div>{props.name}</div>} rearComp={<div>Rear Comp</div>} />
    )
}
export default Card;