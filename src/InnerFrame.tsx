import React, { useState, useEffect} from "react";
import { TileSection } from "./stylesheet";
import { debounce } from 'ts-debounce';

export const InnerFrame: React.FC = () => {
    // useEffect(() => componentMount, [frameWidth]);
    // const [numtiles, setNumTiles] = useState({
    //     totalTiles: 0
    // });
    // useEffect(() => {
    //     window.addEventListener('resize', componentMount);
    //     return () => window.removeEventListener('resize', () => {});
    // })
    // const componentMount = () => {
    //     const tileElement = document.querySelectorAll(
    //         '#frame .tile-section' || {
    //             totalTiles: 0
    //         }
    //     )
    //     setNumTiles({
    //         totalTiles: tileElement.length
    //     });
    // }
    const frameWidth = document.getElementById('frame')?.offsetWidth || 0;
    const frameHeight = document.getElementById('frame')?.offsetHeight || 0;

    useEffect(() => componentMount, [frameWidth]);
    const [numtiles, setNumTiles] = useState({
        totalTiles: 0
    });
    useEffect(() => {
        window.addEventListener('resize', debounce(componentMount, 50));
        return () => window.removeEventListener('resize', () => {});
    })
    const componentMount = () => {
        const tileElement = document.querySelectorAll(
            '#frame .tile-section' || {
                totalTiles: 0
            }
        )
        setNumTiles({
            totalTiles: tileElement.length
        });
    }
    // let numCols = 0;
    // if (numtiles.totalTiles === 1) {
    //     numCols = 1;
    // } else if (numtiles.totalTiles === 2){
    //     numCols = 2;
    // } else if (numtiles.totalTiles === 2){
    //     numCols = 2;
    // } else if (numtiles.totalTiles === 2){
    //     numCols = 2;
    // } else if (numtiles.totalTiles === 2){
    //     numCols = 2;
    // }

    let numTilesFull = Math.min(numtiles.totalTiles, 12);
    const aspectRatio = 16 / 9;
    const tileMinWidth = 300;
    const tileMinHeight = tileMinWidth * aspectRatio;
    const numColsSquare = Math.ceil(Math.sqrt(numTilesFull));
    const numMinSizeCols = Math.floor(frameWidth / tileMinWidth);
    const numMinSizeRows = Math.floor(frameHeight / tileMinHeight);
    const numCols =
      numMinSizeCols < numColsSquare ? numMinSizeCols : numColsSquare;
    const rowsNeeded = Math.ceil(numTilesFull / numCols);
    // // update state with correct dimensions
    let tileWidth = (frameWidth - 10) / numCols;
    let tileHeight = tileWidth / aspectRatio;
    console.log(frameWidth);
    console.log(tileWidth);
    console.log(tileHeight);
    // const rowsPossible =
    //   numMinSizeCols < numColsSquare
    //     ? numMinSizeRows
    //     : Math.max(1, Math.floor(window.innerHeight / tileHeight));
    // const numRows = Math.min(rowsNeeded, rowsPossible);
    // const verticalMargin = window.innerHeight - tileHeight * numRows;
    // if (verticalMargin < 0) {
    //   tileHeight = window.innerHeight / numRows;
    //   tileWidth = tileHeight * aspectRatio;
    // }
    // const numTilesDisplayed = Math.min(numCols * numRows, numTilesFull);
    // const displayFrameWidth = numCols * tileWidth;
    // const displayFrameHeight = numRows * tileHeight;

    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    // console.log(tileHeight);
    // console.log(tileWidth);
    // console.log(numTilesFull);
    // console.log(numTilesDisplayed);
    // console.log(displayFrameHeight);
    // console.log(displayFrameWidth);

    let styleTile = document.getElementsByClassName('tile-section') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < styleTile.length; i++) {
        // styleTile[i].style.minWidth = 'calc(99% / ' + numtiles.totalTiles + ')';
        styleTile[i].style.minWidth = tileWidth.toString() + 'px';
        // styleTile[i].style.minWidth = '500px';
        // styleTile[i].style.paddingTop = 'calc(calc(99% / ' + numtiles.totalTiles + ') / 56.25%)';
        styleTile[i].style.paddingTop = tileHeight.toString() + 'px';
    }
    console.log(styleTile);
    // const parent = document.getElementsByClassName("frame");
    // const numtiles = document.querySelectorAll('.frame .tile-section').length;
    // console.log(numtiles);
    return (
        // ${const num = document.querySelectorAll('.frame .tile-section')};
        <div id='frame'>
            <TileSection className='tile-section'>
                
            </TileSection>
            <TileSection className='tile-section'>
                
            </TileSection>
            <TileSection className='tile-section'>
                
            </TileSection>
            <TileSection className='tile-section'>
                
            </TileSection>
            <TileSection className='tile-section'>
                
            </TileSection>
            
            
            
            
        </div>
    )
}