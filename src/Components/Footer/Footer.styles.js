import styled from "styled-components";
const primary_color = '#F21170';
const secondary_color = '#1f3049';

export const FooterContainer = styled.footer`
    background-color: white;
    height: 6rem;
    border-top: 1px solid ${primary_color};
`
export const FooterWrap = styled.div`
    display: flex;
    alignt-items: center;
    justify-content: center;
    cursor: pointer;
`
export const FooterLinksWraper = styled.ul`
    list-style: none; 
    padding: 1rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`
export const FooterItem = styled.a`
    display: flex;
    font-size: 2rem;
    justify-content: space-around;
    color: ${primary_color};
`

export const FooterCopyright = styled.p`
   text-align: center;
   margin-bottom: .5rem;
   color: ${secondary_color};
`