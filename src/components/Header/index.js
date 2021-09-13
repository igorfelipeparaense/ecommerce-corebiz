import React from 'react';
import Logo from 'components/Logo';
import Search from 'components/Search';
import Actions from 'components/HeaderActions';
import { Container } from './styles';


const Header = () => {
  return <Container>
    <Logo />
    <Search />
    <Actions />
  </Container>
}
export default Header;