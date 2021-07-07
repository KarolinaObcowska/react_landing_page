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
                    <NavLink as='a' href='#services'>Services</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink as='a' href='#about'>About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink as='a' href='#team'>Team</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink as='a' href='#contact'>Contact</NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar
