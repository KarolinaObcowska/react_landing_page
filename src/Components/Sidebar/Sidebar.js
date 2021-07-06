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
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='team' onClick={toggle}>Team</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarListItems>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
