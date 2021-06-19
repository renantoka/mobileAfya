import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

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

import UserIcon from '../../assets/icons/user.svg'
import MailIcon from '../../assets/icons/mail.svg';
import LockIcon from '../../assets/icons/lock.svg';

import SignInput from '../../components/SignInput';

import afyaLogo from '../../assets/img/logo.png';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordlField, setPasswordField] = useState('');

    /*  const handleSignClick = async () => {
         if (nameField != '' && emailField != '' && passwordlField != '') {
             let res = await Api.signUp(nameField, emailField, passwordField);
             if (res.token) {
                 await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name: 'Dash'}]
                });
             } else {
                 alert('Erro: '+res.error);
             }
         } else {
             alert('Preencha os campos!')
         }
     } */

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    }

    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <InputArea>
                <SignInput
                    IconSvg={UserIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setNameField(t)}
                />
                <SignInput
                    IconSvg={MailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordlField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}