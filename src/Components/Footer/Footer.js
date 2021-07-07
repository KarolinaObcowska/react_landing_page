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
                    <FooterItem as='a' href='facebook.com'>
                        <AiFillFacebook />
                    </FooterItem>
                    <FooterItem as='a' href='instagram.com'>
                        <AiFillInstagram />
                    </FooterItem>
                    <FooterItem as='a' href='twitter.com'>
                        <AiFillTwitterSquare />
                    </FooterItem>
                    <FooterItem as='a' href='linkedin.com'>
                        <AiFillLinkedin />
                    </FooterItem>
                </FooterLinksWraper>
            </FooterWrap>
            <FooterCopyright type='submit'>Copyright © 2021 Karolina Obcowska. </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
