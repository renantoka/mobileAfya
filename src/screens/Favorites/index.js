import React from 'react';
import { Text, } from 'react-native';
import { Container, CustomButton, CustomButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    const handleSignClick = () => {
        navigation.reset({
            routes: [{ name: 'RegistrarCliente' }]
        });
    }
    return (
        <Container>
            <Text> Favorites </Text>
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>Cadastrar cliente</CustomButtonText>
            </CustomButton>
        </Container>
    );
}
