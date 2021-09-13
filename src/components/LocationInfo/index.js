import React from 'react';
import Title from 'components/TitleSection';
import { Container, Content } from './styles';

const LocationInfo = () => {
   return <Container>
        <Title {...{
            text: 'Localização',
            color: '#fff',
            borderColor: '#fff'
        }} />
        <Content>
            <span>Avenida Andrômeda, 2000. Bloco 6 e 8</span>
            <span>Alphavile SP</span>
            <span>brasil@corebiz.ag</span>
            <span>+55 11 3090 1039</span>
        </Content>
    </Container>
}
export default LocationInfo;