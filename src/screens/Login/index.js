import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';

import Api from '../../services/Api';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    CheckBoxText
} from './styles';

import MailIcon from '../../assets/icons/mail.svg';
import LockIcon from '../../assets/icons/lock.svg';

import afyaLogo from '../../assets/img/logo.png';

import SignInput from '../../components/SignInput';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [registerField, setRegisterField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const handleSignClick = async () => {

        if (registerField != '' && passwordField != '') {
            let json = await Api.post("/login", { registro: registerField, senha: passwordField })
                .then(async res => {

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
            alert('Por favor, preencha todos os campos');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Cadastro' }]
        });
    }

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                navigation.navigate("Login")
            } else {
                navigation.navigate("MainTab");
            }
        }
        checkToken();
    }, []);
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
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    password={true}
                />
                <CheckBox disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                <CheckBoxText>Lembrar senha</CheckBoxText>

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