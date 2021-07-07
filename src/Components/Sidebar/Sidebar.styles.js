import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const primary_color = '#1f3049';
const hover_color = '#F21170'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 90;
    width: 100%;
    height: 100%;
    background-color: ${primary_color};
    color: white;
    display: grid;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opactiy: ${({ isOpen }) => (isOpen ? '0.6' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: ${hover_color};
    cursor: pointer
`

export const Icon = styled.div`
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.7rem;
    font-size: 1.7rem;
    justify-contenet: space-betweend;
    background: transparent;
    outline: none;
`
export const SidebarWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`
export const SidebarListItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    alignt-items:center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .3s easy-in-out;
    color: white;
    cursor: pointer;

    &:hover {
        color: ${hover_color};
        transition: .2s easy-in-out;
    }
`