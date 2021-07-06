import styled from "styled-components"
import { Link } from 'react-scroll';

const primary_color = '#F21170'
const secondary_color = '#1f3049'

export const AboutContainer = styled.div`
    height: 100vh;
    background: ${({ lightBg }) => (lightBg ? 'white' : `${secondary_color}`)};
    color: ${({ lightBg }) => (lightBg ? `${secondary_color}` : 'white')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
        height: fit-content;
    }
`
export const InfoContainer = styled.div`
    display: grid;
    z-index: 1;
    width: 100%
    max-width: 1100px;
    height: 53rem;
    margin-right: auto;
    margin-left: auto;
    padding; 0 1.5rem;
    justift-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`
export const Column1 = styled.div`
    margin-bottom: 1rem;
    padding: 0 1rem;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 1rem;
    padding: 0 1rem;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    margin-left: 3rem;
    margin-right: 3rem;
    padding-top: 0;
    padding-bottom: 4rem;

`
export const TopLine = styled.p`
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 1rem;
`
export const Heading = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: ${primary_color};

    @media screen and (max-width: 768px) {
        font-size: 2.5rem
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 2.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
`

export const BtnContainer = styled.div`
    display:flex;
    justify-content: flex-start;
`
export const Button = styled(Link)`
    border-radius: 50px;
    background-color: ${primary_color};
    background: linear-gradient(90deg, rgba(227,29,121,1) 13%, rgba(255,0,236,1) 100%);
    z-index: 3;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    padding: .5rem;
    width: 6rem;
    text-decoration: none;
    span {
        color: white;
        justify-content: center;
    }
`

export const ImgContainer = styled.div`
    max-width: 555px;
    margin-left: 3rem;
    margin-right: 3rem;
    height: 100%
    @media screen and (max-width: 768px) {
        justify-content: center;
        margin: auto;
    }

`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 .4rem 0;
    padding-right: 0;
`