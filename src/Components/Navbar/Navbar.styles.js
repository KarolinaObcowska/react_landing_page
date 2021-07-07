import styled, { keyframes } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const primaryColor = '#F21170';
const slideIn = keyframes`
from{
}
to{
    transform: translateX(0);
}`;

export const Nav = styled.nav`
    padding-top: 1.5rem;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    text-transform: uppercase;
    position: fixed;
    top: 0;
    z-index: 1;
`;

export const Title = styled.h2`
    margin-left: 2rem;
    transform: translateX(-70rem);
    color: white;
    animation: ${slideIn} .5s forwards;
    
    ::before {
        content: '';
        position: absolute;
        width: 11rem;
        height: 1px;
        top: 1.7rem;
        left: .1rem;
        background-color: ${primaryColor};
        transform: translateX(-70rem);
        animation: ${slideIn} 1.2s forwards;
    }
    
    @media screen and (max-width: 900px) { 
        display: none
    }
`;
export const MobileIcon = styled.div`
    display: none;
    color: ${primaryColor};
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 1.5rem;
        right: 1.7rem;
        font-size: 1.7rem;
        cursor: pointer;
        transform: translateX(70rem);
        animation: ${slideIn} .5s forwards;
    }
`
export const NavList = styled.ul`
    display: flex;
    padding-right: 2rem;
    padding-left: 5rem
`;

export const NavListItem = styled.li`
    list-style: none;
    display: inline-block;
    justify-content: space-around;
    transform: translateX(70rem);
    animation: ${slideIn} .5s forwards;
    
    :nth-child(1) {
        animation-delay: .5s;
    }
    :nth-child(2) {
        animation-delay: .7s;
    }
    :nth-child(3) {
        animation-delay: .9s;
    }
    :nth-child(4) {
        animation-delay: 1.1s;
    }
    
    @media screen and (max-width: 768px) { 
        display: none
    }
`;

export const NavLink = styled(LinkRouter)`
    padding: 1rem 0;
    margin: 0 2rem;
    position: relative;
    letter-spacing: 2px;
    text-decoration: none;
    color: white;
    
    ::before {
        top: .6rem;
        transform-origin: left;
    }
    
    ::after {
        bottom: .8rem;
        transform-origin: right;
    }
    
    ::before,
    ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${primaryColor};
        left: 0;
        transform: scaleX(0);
        transition: all .5s;
    }
    
    :hover::before,
    :hover::after {
        transform: scaleX(1);
    }
`
