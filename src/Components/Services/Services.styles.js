import styled from "styled-components";
const primary_color = '#1f3049';
const secondary_color = '#F21170'

export const ServicesContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    overflow:hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${secondary_color};
    @media screen and (max-width: 1000px) {
        height: fit-content;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
`

export const ServicesTitle = styled.h1`
    font-size: 2.5rem;
    color: ${primary_color};
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
       font-size: 2rem; 
    }
`

export const ServicesWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    padding: auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 1.3rem;
    }
`

export const ServicesCard = styled.div`
    display: flex;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    max-height: 350px;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;

    :hover {
        transform: scale(1.06);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 10rem;
    width: 10rem;
    margin-bottom: .8rem;
`

export const ServicesSubtitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: ${primary_color};
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center; 
    color: ${primary_color};
`