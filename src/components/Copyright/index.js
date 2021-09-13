import React from 'react';
import Corebiz from 'asserts/logo-corebiz-global.svg';
import Vtex from 'asserts/logo-vtex.png';
import { Container, Item } from './styles';

const Content = ({
    text,
    img
}) => {
    return <Item>
        <span>{text}</span>
        <img src={img} alt={text} />
    </Item>
}

const Copyright = () => {
    return <Container>
    <Content {...{
        text: "Created by",
        img: Corebiz
    }} />
    <Content {...{
        text: "Powered by",
        img: Vtex
    }} />
</Container>
}
export default Copyright;