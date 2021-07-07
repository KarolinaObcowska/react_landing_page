import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarListItems, SidebarLink } from './Sidebar.styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarListItems>
                    <SidebarLink to='home' 
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' 
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='team' 
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={toggle}>Team</SidebarLink>
                    <SidebarLink to='contact' 
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={toggle}>Contact</SidebarLink>
                </SidebarListItems>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
