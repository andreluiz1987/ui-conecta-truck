import React, { Component } from 'react';

import { View } from 'react-native';
import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './style';

export default class Details extends Component {
    render() {
        return (
            <Container>
                <TypeTitle>O CUSTO DO FRETE SERÁ</TypeTitle>
            </Container>
        );
    }
}
