import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import afyaLogo from '../../assets/img/logo.png';

export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {

            } else {
                navigation.navigate('Login');
            }
        }
        checkToken();
    }, []);
    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <LoadingIcon size="large" color="#FFFFFF" />

        </Container>
    );
}