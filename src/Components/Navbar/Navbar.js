import React from 'react'
import { Nav, Title, NavList, NavListItem, NavLink, MobileIcon } from './Navbar.styles';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
const Navbar = ({ toggle }) => {
    return (
        <Nav>
            <Title to='home'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>The Universe</Title>
            <MobileIcon onClick={toggle}>
                <RiBarChartHorizontalFill />
            </MobileIcon>
            <NavList>
                <NavListItem>
                    <NavLink to='services'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>Services</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='about'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='team'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>Team</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='contact'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>Contact</NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar
