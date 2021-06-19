import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Api from '../../services/Api';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import MailIcon from '../../assets/icons/mail.svg';
import LockIcon from '../../assets/icons/lock.svg';

import afyaLogo from '../../assets/img/logo.png';

import SignInput from '../../components/SignInput';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [registerField, setRegisterField] = useState('');
    const [senhaField, setSenhaField] = useState('');

    const handleSignClick = async () => {

        if (registerField != '' && senhaField != '') {
            let json = await Api.post("/login", { registro: registerField, senha: senhaField })
                .then(async res => {

                    //await AsyncStorage.removeItem('token')
                    await AsyncStorage.setItem('token', res.data.token)

                    let token = await AsyncStorage.getItem('token')
                    console.log(token)
                    alert('Usuario autenticado')
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                })
                .catch(e => {
                    console.log(e.message)
                    alert('Usuario não autenticado')
                }
                )
        } else {
            alert('E-mail e/ou senha incorretos');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Cadastro' }]
        });
    }

    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode='contain'
            />

            <InputArea>
                <SignInput
                    IconSvg={MailIcon}
                    placeholder='Digite seu registro'
                    value={registerField}
                    onChangeText={t => setRegisterField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={senhaField}
                    onChangeText={t => setSenhaField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}