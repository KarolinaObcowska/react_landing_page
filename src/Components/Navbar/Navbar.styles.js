import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
from{

}
to{
    transform: translateX(0);
}`;

export const Nav = styled.nav`
    padding-top: 1rem;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 1;
`;

export const Title = styled.h2`
    margin-left: 1.5rem;
    transform: translateX(-70rem);
    animation: ${slideIn} .5s forwards;
`;

export const NavList = styled.ul`
    display: flex
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
        animation-delay: 1s;
    }
    :nth-child(3) {
        animation-delay: 1.5s;
    }
    :nth-child(4) {
        animation-delay: 2s;
    }
`;

export const Link = styled.a`
    padding: 1rem 0;
    margin: 0 1.5rem;
    position: relative;
    letter-spacing: 2px;
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
        background-color: crimson;
        left: 0;
        transform: scaleX(0);
        transition: all .5s;
    }
    :hover::before,
    :hover::after {
        transform: scaleX(1);
    }
`;