import React, { useState, useContext, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';

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
import neighborhooodIcon from '../../assets/icons/phone.svg';
import HashIcon from '../../assets/icons/hash.svg';


import SignInput from '../../components/SignInput';

import afyaLogo from '../../assets/img/logo.png';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    const route = useRoute();

    const [cepField, setCepField] = useState('');
    const [compField, setCompField] = useState('');
    const [numberField, setNumberField] = useState('');
    const [neighborhoodField, setNeighborhoodField] = useState('');
    const [streetField, setStreetField] = useState('');
    const [ufType, setUfType] = useState('');

    const handleSignClick = async () => {
        if (cepField != '' && compField != '' && numberField
            != '' && neighborhoodField != '' && streetField
            != '' && ufType != '') {

            let token = await AsyncStorage.getItem('token')
            console.log(token)

            const data = {
                cep: cepField,
                cidade: compField,
                numero: numberField,
                bairro: neighborhoodField,
                logradouro: streetField,
                estado: ufType
            };


            useEffect(() => {
                async function fetchAddress() {

                    const res = await Api.post(`/patient/address/${req.body.id}`, data, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })

                    if (res) {
                        alert('Endereço adicionado com sucesso')
                        navigation.reset({
                            routes: [{ name: 'MainTab' }]
                        });
                    } else {
                        console.log(error)
                        alert("Erro ao cadastrar endereço")
                    }
                }
                fetchAddress();

            }, [idParams])


        } else {
            alert('Preencha todos os campos')
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'RegistrarCliente' }]
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
                        IconSvg={neighborhooodIcon}
                        placeholder="Bairro"
                        value={neighborhoodField}
                        onChangeText={t => setNeighborhoodField(t)}
                    />
                    <SignInput
                        IconSvg={MailIcon}
                        placeholder="Rua"
                        value={streetField}
                        onChangeText={t => setStreetField(t)}
                    />
                    <SignInput
                        IconSvg={LockIcon}
                        placeholder="UF"
                        value={ufType}
                        onChangeText={t => setUfType(t)}
                    />

                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>Cadastrar endereço</CustomButtonText>
                    </CustomButton>
                </InputArea>

                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Deseja cadastrar um cliente ao invés de endereço?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Clique aqui</SignMessageButtonTextBold>
                </SignMessageButton>
            </ScrollView>
        </Container>
    );
}