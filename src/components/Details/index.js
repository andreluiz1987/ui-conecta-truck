import React, { Component } from 'react';

import { View } from 'react-native';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './style';
import uberx from '../../assets/uberx.png';

export default class Details extends Component {
    render() {
        return (
            <Container>
                <TypeTitle>O CUSTO DO FRETE SERÁ</TypeTitle>
                <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>
                <TypeTitle>Uber X</TypeTitle>
                <RequestButton onPress={() => { }}>
                    <RequestButtonText>SOLICITAR UBER X</RequestButtonText>
                </RequestButton>
            </Container>
        );
    }
}
