import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

const primary_color = '#F21170';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    overflow: hidden;
`

export const Video = styled.video`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
`;

export const HeroH1 = styled.h1`
    color: white;
    z-index: 3;
    font-size: 3rem;
    span {
        color: ${primary_color}
    }

    @media screen and (max-width: 768px) {
        font-size: 2.5rem
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem
    }
`

export const HeroP = styled.p`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    max-width: 600px;
    text-align: center;
    color: white;
    z-index: 3;
    @media screen and (max-width: 480px) {
        font-size: 1rem
    }
`

export const HeroBtn = styled.div`
    margin-top: 2rem;
    display: flex;
    felx-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled(Link)`
    border-radius: 50px;
    background-color: ${primary_color};
    background: linear-gradient(90deg, rgba(227,29,121,1) 13%, rgba(255,0,236,1) 100%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    text-decoration: none;
    span {
        color: white;
        justify-content: center;
    }
`

export const ArrowRight = styled(MdArrowForward)`
    margin-left: .5rem;
    font-size: 1.5rem;
    color: white;
`