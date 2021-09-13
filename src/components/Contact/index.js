import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Button from 'components/Button';
import { Container } from './styles';

const Contact = () => {
    return <Container>
        <Button {...{
            label: "ENTRE EM CONTATO",
            icon: <AiOutlineMail size={18} />,
            color: "#000"
        }} />
        <Button {...{
            label: "FALE COM O NOSSO CONSULTOR ONLINE",
            icon: <AiOutlinePhone size={18} />,
            color: "#000"
        }} />
    </Container>
}

export default Contact;