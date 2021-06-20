import React from 'react';
import { Text, Button } from 'react-native';
import { Container, CustomButton, CustomButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

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

    return (
        <Container>
            <Text>Perfil</Text>
            <CustomButton
                title="Sair"
                onPress={handleLogOutClick}>
                <CustomButtonText>Sair</CustomButtonText>
            </CustomButton>

        </Container>
    );
}
