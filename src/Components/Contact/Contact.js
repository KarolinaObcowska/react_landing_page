import React from 'react'
import { 
    ContactContainer, 
    ContactForm, 
    FormTitle, 
    FormLabel, 
    FormInput,
    FormTextarea,
    FormButton
} from './Contact.styles';


const Contact = () => {
    return (
        <ContactContainer>
            <FormTitle>Contact Us!</FormTitle>
            <ContactForm>
                <FormLabel>Name</FormLabel>
                <FormInput />
                <FormLabel>E-mail</FormLabel>
                <FormInput />
                <FormLabel>Message</FormLabel>
                <FormTextarea />
                <FormButton>Submit</FormButton>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact
