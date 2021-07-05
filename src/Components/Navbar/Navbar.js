import React from 'react'
import { Nav, Title, NavList, NavListItem, Link } from './Navbar.styles';

const Navbar = () => {
    return (
        <Nav>
            <Title>The Bakery</Title>
            <NavList>
                <NavListItem>
                    <Link>Home</Link>
                </NavListItem>
                <NavListItem>
                    <Link>About</Link>
                </NavListItem>
                <NavListItem>
                    <Link>Team</Link>
                </NavListItem>
                <NavListItem>
                    <Link>Contact</Link>
                </NavListItem>
            </NavList>
        </Nav>
    )
}

export default Navbar
