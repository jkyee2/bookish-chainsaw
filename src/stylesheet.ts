import styled from 'styled-components';

interface Props {
    text?: string;
}

const InnerFrame = styled.div.attrs({ className: 'inner-frame'})<any>`
    // min-height: 600px;
    // height: 90%;
    width: 90%;
    // padding-top: 56.25%
    display: flex;
    flex-wrap: wrap;
    // position: relative;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    .inner-frame > tile-section {
        flex: 1 1 100%;
    }
`;

const TileSection = styled.div.attrs({ className: 'tile-section'})<any>`
    position: relative;
    min-width: 300px;
    // width: calc(99% / 3);
    // width: 33%;
    padding-top: calc(56.25% / 3);
    // height: 56px;
    background-color: white;
    border: solid 1px black;
    // ${InnerFrame} & {
    //     width: 70%;
    //     padding-top: 56.25%;
    // }
`

export {
    InnerFrame,
    TileSection
};