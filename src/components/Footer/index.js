import React from 'react';
import LocationInfo from 'components/LocationInfo';
import Contact from 'components/Contact';
import Copyright from 'components/Copyright';
import { Container } from './styles';

const Footer = () => {
 return <Container>
  <LocationInfo />
  <Contact />
  <Copyright />
</Container>
}

export default Footer;