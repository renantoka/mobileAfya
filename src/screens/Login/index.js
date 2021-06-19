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

import MailIcon from '../../assets/icons/mail.svg';
import LockIcon from '../../assets/icons/lock.svg';

import afyaLogo from '../../assets/img/logo.png';

import SignInput from '../../components/SignInput';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordlField, setPasswordField] = useState('');

    /*  const handleSignClick = async () => {
         if (emailField != '' && passwordlField != '') {
             let json = await Api.signIn(emailField, passwordField);
             if (json.token) {
                 await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name: 'Dash'}]
                });

             } else {
                 alert('E-mail e/ou senha incorretos');
             }
         } else {
             alert('Preencha os campos!')
         }
     } */

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
                    placeholder='Digite seu e-mail'
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={passwordlField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />

                <CustomButton>
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