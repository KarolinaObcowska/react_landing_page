import React from 'react'
import { Nav, Title, NavList, NavListItem, NavLink, MobileIcon } from './Navbar.styles';
import { RiBarChartHorizontalFill } from 'react-icons/ri';


const Navbar = ({ toggle }) => {

    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        const mobile = document.querySelector('.mobile');
        const offset = window.pageYOffset;

        if (offset > 623) {
            nav.style.backgroundColor = '#F21170'
            mobile.style.color = 'white';
        } else {
            nav.style.backgroundColor = 'transparent'
            mobile.style.color = '#F21170';
        }
        if (offset > 1473 ) {
            nav.style.backgroundColor = '#1f3049'
        }
        if (offset > 2253 ) {
            nav.style.backgroundColor = '#F21170'
        }
    })

    return (
        <Nav>
            <Title to='home'
            spy={true}
            smooth={true}
            duration={500}>The Universe</Title>
            <MobileIcon onClick={toggle} className='mobile'>
                <RiBarChartHorizontalFill />
            </MobileIcon>
            <NavList>
                <NavListItem>
                    <NavLink to='services'
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>Services</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='about'
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>About</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='team'
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>Team</NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to='contact'
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}>Contact</NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar
