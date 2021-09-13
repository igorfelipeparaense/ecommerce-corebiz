import React from 'react';
import { Container } from './styles';

const Button = ({
  label,
  icon,
  ...rest
}) => { 
return <Container {...rest}>
    <span>{icon}</span>
    <span>{label}</span>
  </Container>
}
export default Button;