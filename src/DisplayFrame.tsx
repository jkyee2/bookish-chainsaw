import React from "react";
// import { TileSection } from "./stylesheet";
import { InnerFrame } from "./InnerFrame";
import './App.css';


export const DisplayFrame: React.FC = () => {
    const element = <InnerFrame />;
    // const numtiles = document.querySelectorAll('.frame .tile-section').length;
    // console.log(numtiles);

    return (
        <div className='display-frame'>
            <InnerFrame />
        </div>
    )
}