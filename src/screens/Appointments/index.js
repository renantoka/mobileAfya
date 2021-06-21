import React from 'react';
import { Container, HeaderText, BackButton } from './styles';
import { useNavigation } from '@react-navigation/native';

import BackIcon from '../../assets/icons/arrow-left.svg'

export default () => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <Container>
            <HeaderText> Consultas </HeaderText>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" color="#d40054" />
            </BackButton>
        </Container>

    );
}
