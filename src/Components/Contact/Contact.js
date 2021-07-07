import React, { useState } from 'react';
import { db } from '../firebase';
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

    const initialState = '';

    const [name, setName] = useState(initialState);
    const [email, setEmail] = useState(initialState);
    const [message, setMessage] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        db.collection('contacts')
        .add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            alert('Message has been submited')
        })
        .catch(err => {
            alert(err.message)
        })
        setName(initialState);
        setEmail(initialState);
        setMessage(initialState);
    }

    return (
        <ContactContainer id='contact'>
            <FormTitle>Contact Us!</FormTitle>
            <ContactForm onSubmit={handleSubmit} >
                <FormLabel>Name</FormLabel>
                <FormInput name='name' onChange={e => setName(e.target.value)}/>
                <FormLabel>E-mail</FormLabel>
                <FormInput name='email' onChange={e => setEmail(e.target.value)}/>
                <FormLabel>Message</FormLabel>
                <FormTextarea name='message' onChange={e => setMessage(e.target.value)}/>
                <FormButton type='submit'>Submit</FormButton>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact
