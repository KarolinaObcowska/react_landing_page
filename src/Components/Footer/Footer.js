import React from 'react'
import { 
    AiFillFacebook, 
    AiFillInstagram, 
    AiFillTwitterSquare, 
    AiFillLinkedin } 
from 'react-icons/ai';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksWraper, 
    FooterItem, 
    FooterCopyright } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksWraper>
                    <FooterItem to='facebook.com'>
                        <AiFillFacebook />
                    </FooterItem>
                    <FooterItem to='instagram.com'>
                        <AiFillInstagram />
                    </FooterItem>
                    <FooterItem to='twitter.com'>
                        <AiFillTwitterSquare />
                    </FooterItem>
                    <FooterItem to='linkedin.com'>
                        <AiFillLinkedin />
                    </FooterItem>
                </FooterLinksWraper>
            </FooterWrap>
            <FooterCopyright>Copyright © 2021 Karolina Obcowska. </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
