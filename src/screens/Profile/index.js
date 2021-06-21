import React from 'react';
import { Container, CustomButton, CustomButtonText, BackButton, HeaderText } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import BackIcon from '../../assets/icons/arrow-left.svg'

import Api from '../../services/Api';

export default () => {

    const navigation = useNavigation();

    const handleLogOutClick = async () => {

        await AsyncStorage.removeItem('token')

        alert('Você saiu')
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    }

    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <HeaderText>Perfil</HeaderText>
            <CustomButton
                title="Sair"
                onPress={handleLogOutClick}>
                <CustomButtonText>Sair</CustomButtonText>
            </CustomButton>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" color="#d40054" />
            </BackButton>

        </Container>
    );
}
