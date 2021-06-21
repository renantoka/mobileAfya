import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';

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
    SignMessageButtonTextBold,
    CheckBoxText

} from './styles';

import UserIcon from '../../assets/icons/user.svg'
import MailIcon from '../../assets/icons/mail.svg';
import LockIcon from '../../assets/icons/lock.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import CellphoneIcon from '../../assets/icons/smartphone.svg';
import ProfessionIcon from '../../assets/icons/activity.svg';
import HashIcon from '../../assets/icons/hash.svg';


import SignInput from '../../components/SignInput';

import afyaLogo from '../../assets/img/logo.png';

import CheckBox from '@react-native-community/checkbox';

export default () => {

    const navigation = useNavigation();

    const [registerField, setRegisterField] = useState('');
    const [nameField, setNameField] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const [cellphoneField, setCellphoneField] = useState('');
    const [mailField, setMailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [professionField, setProfessionField] = useState('');

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const handleSignClick = async () => {
        if (registerField != '' && nameField != '' && phoneField
            != '' && cellphoneField != '' && mailField
            != '' && passwordField != '' && professionField != '') {
            let json = await Api.post("/specialist", {
                registro: registerField,
                nome: nameField,
                telefone: phoneField,
                celular: cellphoneField,
                email: mailField,
                senha: passwordField,
                profissao: professionField
            })
                .then(res => {
                    console.log(res.data)
                    alert('Usuario criado com sucesso')
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                })
                .catch(e => {
                    console.log(e.message)
                    alert('Já existe esse usuário no sistema')
                }
                )
        } else {
            alert('Por favor preencha todos os campos')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    }

    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 150, height: 150 }}
                resizeMode='contain'
            />
            <ScrollView>
                <InputArea>
                    <SignInput
                        IconSvg={HashIcon}
                        placeholder="Insira seu registro"
                        value={registerField}
                        onChangeText={t => setRegisterField(t)}
                    />
                    <SignInput
                        IconSvg={UserIcon}
                        placeholder="Insira seu nome"
                        value={nameField}
                        onChangeText={t => setNameField(t)}
                    />
                    <SignInput
                        IconSvg={PhoneIcon}
                        placeholder="Insira seu telefone"
                        value={phoneField}
                        onChangeText={t => setPhoneField(t)}
                    />
                    <SignInput
                        IconSvg={CellphoneIcon}
                        placeholder="Insira seu celular"
                        value={cellphoneField}
                        onChangeText={t => setCellphoneField(t)}
                    />
                    <SignInput
                        IconSvg={MailIcon}
                        placeholder="Insira seu e-mail"
                        value={mailField}
                        onChangeText={t => setMailField(t)}
                    />
                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="Insira sua senha"
                        value={passwordField}
                        onChangeText={t => setPasswordField(t)}
                        password={true}
                    />
                    <SignInput
                        IconSvg={ProfessionIcon}
                        placeholder="Insira sua profissão"
                        value={professionField}
                        onChangeText={t => setProfessionField(t)}
                    />
                    <CheckBox disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                    <CheckBoxText>Declaro que li e concordo com os termos e condições de uso.</CheckBoxText>

                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>Cadastrar</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
                </SignMessageButton>
            </ScrollView>
        </Container>
    );
}