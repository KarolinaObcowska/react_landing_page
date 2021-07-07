import styled from "styled-components";
import Background from '../../images/background.svg';
const primary_color = '#F21170';
const secondary_color = '#1f3049';

export const ContactContainer = styled.section`
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 100%;
`

export const ContactForm = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    color: ${primary_color};
    padding: 3rem;
    width: 100%;
    max-width: 600px;
`

export const FormTitle = styled.h2`
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${primary_color};
    margin-bottom: 2rem;

    ::before {
        content: '';
        position: absolute;
        width: 11rem;
        height: 1px;
        top: 1.7rem;
        left: .1rem;
        background-color: ${primary_color};
    }
`

export const FormLabel = styled.label`
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: .5rem 0;
`

export const FormInput = styled.input`
    height: 2rem;
    border: 1px solid ${secondary_color};
    @media screen and (max-width: 68px) {
        width: 13rem
    }
`

export const FormTextarea = styled.textarea`
    margin-bottom: 2rem;   
    border: 1px solid ${secondary_color};
    height: 4rem
`

export const FormButton = styled.button`
    font-size: 1rem;
    text-transform: uppercase;
    width: 7rem;
    margin: auto;
    color: white;
    padding: .3rem;
    border-radius: 50px;
    background-color: ${primary_color};
    background: linear-gradient(90deg, rgba(227,29,121,1) 13%, rgba(255,0,236,1) 100%);
    z-index: 3;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

`