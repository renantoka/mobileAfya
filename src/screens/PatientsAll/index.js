import React, { useState, useEffect } from 'react';
import { ScrollView, Image } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    HeaderText,
    PageBody,
    UserInfoArea,
    ServiceArea,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton,
    BloodType

} from './styles';

import BackIcon from '../../assets/icons/arrow-left.svg'
import FavoriteIcon from '../../assets/icons/star.svg'

import { useNavigation, useRoute } from '@react-navigation/native';


import afyaLogo from '../../assets/img/logo.png';

import Swiper from 'react-native-swiper';

import Api from '../../services/Api';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState([]);
    const [getUser, setUser] = useState(true);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPatientInfo = async () => {
            setLoading(true);

            let token = await AsyncStorage.getItem('token')

            // console.log(token)

            const json = await Api.get(`/patient/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data)
                setUser(false)
                setUserInfo(res.data);
            }).catch((error) => {
                console.log(error)
            })
            setLoading(false);
        }
        getPatientInfo();
    }, []);



    // while res.data.id < res.data.id.length
    const handleBackButton = () => {
        navigation.goBack();
    }

    const handlePatient = (id) => {
        console.log(id)
        navigation.navigate('Paciente', {
            screen: 'TodosPacientes',
            params: id,
        })
    }


    return (
        <Container>

            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />
            <ScrollView>
                <PageBody>
                    <HeaderText>
                        Lista de pacientes
                    </HeaderText>
                    <ScrollView>
                        <ServiceArea>
                            {userInfo.map((patient) => (
                                <UserInfoArea key={patient.id}>
                                    <UserInfo>
                                        <UserInfoName>Paciente: {patient.nome}</UserInfoName>
                                        <UserInfoName>ID: {patient.id}</UserInfoName>
                                        <BloodType>Tipo sanguíneo: {patient.tipo_sanguineo}</BloodType>
                                    </UserInfo>
                                    <UserFavButton onPress={e => handlePatient(patient.id)}>
                                        <FavoriteIcon width="24" height="24" color="black"></FavoriteIcon>
                                    </UserFavButton>
                                </UserInfoArea>
                            ))}
                        </ServiceArea>
                    </ScrollView>
                </PageBody>
            </ScrollView>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" color="#d40054" />
            </BackButton>

        </Container >
    );
}
