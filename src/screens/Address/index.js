import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Api from '../../services/Api';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    HeaderText,
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
import PhoneIcon from '../../assets/icons/phone.svg';
import neighborhooodIcon from '../../assets/icons/smartphone.svg';
import HashIcon from '../../assets/icons/hash.svg';


import SignInput from '../../components/SignInput';

import afyaLogo from '../../assets/img/logo.png';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [cepField, setCepField] = useState('');
    const [compField, setCompField] = useState('');
    const [numberField, setNumberField] = useState('');
    const [neighborhoodField, setNeighborhoodField] = useState('');
    const [streetField, setStreetField] = useState('');
    const [ufType, ufType] = useState('');

    const handleSignClick = async () => {
        if (cepField != '' && compField != '' && numberField
            != '' && neighborhoodField != '' && streetField
            != '' && ufType != '' && professionField != '') {
            let json = await Api.post("/patients", {
                cep: cepField,
                nome: compField,
                number: numberField,
                neighborhood: neighborhoodField,
                street: streetField,
                uf: ufType,
            })
                .then(res => {
                    let token = AsyncStorage.getItem('token')
                    console.log(res.data)
                    alert('Endereço adicionado com sucesso')
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                })
                .catch(e => {
                    console.log(e.message)
                    alert('Já existe esse paciente cadastrado no sistema')
                }
                )
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'Login' }]
        });
    }

    return (
        <Container>
            {/* 
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode='contain'
            /> */}
            <HeaderText>
                Adicionar um novo endereço
            </HeaderText>
            <InputArea>
                <SignInput
                    IconSvg={HashIcon}
                    placeholder="CEP"
                    value={cepField}
                    onChangeText={t => setCepField(t)}
                />
                <SignInput
                    IconSvg={UserIcon}
                    placeholder="Complemento"
                    value={compField}
                    onChangeText={t => setCompField(t)}
                />
                <SignInput
                    IconSvg={PhoneIcon}
                    placeholder="Número"
                    value={numberField}
                    onChangeText={t => setNumberField(t)}
                />
                <SignInput
                    IconSvg={neighborhoodIcon}
                    placeholder="Bairro"
                    value={neighborhoodField}
                    onChangeText={t => setNeighborhoodField(t)}
                />
                <SignInput
                    IconSvg={MailIcon}
                    placeholder="Rua"
                    value={mailField}
                    onChangeText={t => setStreetField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="UF"
                    value={ufType}
                    onChangeText={t => ufType(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar cliente</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}