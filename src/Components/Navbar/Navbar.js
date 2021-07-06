import React from 'react'
import { Nav, Title, NavList, NavListItem, NavLink, MobileIcon } from './Navbar.styles';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Title>The Universe</Title>
            <MobileIcon onClick={toggle}>
                <RiBarChartHorizontalFill />
            </MobileIcon>
            <NavList>
                <NavListItem>
                    <NavLink to='services'>Services</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='about'>About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='team'>Team</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='contact'>Contact</NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar
