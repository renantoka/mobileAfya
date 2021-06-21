import React from 'react';
import { Container, CustomButton, CustomButtonText, BackButton, HeaderText } from './styles';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/icons/arrow-left.svg'

import { Image } from 'react-native';

import afyaLogo from '../../assets/img/logo.png';

export default () => {
    const navigation = useNavigation();

    const handleSignClick = () => {
        navigation.reset({
            routes: [{ name: 'RegistrarCliente' }]
        });
    }

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>Cadastrar cliente</CustomButtonText>
            </CustomButton>

            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" color="#d40054" />
            </BackButton>
        </Container>
    );
}
