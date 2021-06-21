import React, { useState, useEffect } from 'react';
import { Image, ScrollView } from 'react-native';

import PatientModal from '../../components/PatientModal';

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
    NormalText,
} from './styles';

import BackIcon from '../../assets/icons/arrow-left.svg'
import FavoriteIcon from '../../assets/icons/star.svg'
import afyaLogo from '../../assets/img/logo.png';

import { useNavigation, useRoute } from '@react-navigation/native';

import Api from '../../services/Api';

export default (id) => {

    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState([]);
    const [getUser, setUser] = useState(true);

    const [loading, setLoading] = useState(false);

    const idParams = id.route.params.params

    useEffect(() => {
        const getPatientInfo = async () => {
            setLoading(true);

            let token = await AsyncStorage.getItem('token')

            console.log("page patient", idParams)
            console.log("page params", id.route)

            const json = await Api.get(`/patient/${idParams}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {

                setUser(false)

                setUserInfo({
                    id: res.data[0].id,
                    name: res.data[0].nome,
                    bloodtype: res.data[0].tipo_sanguineo,
                    cpf: res.data[0].cpf,
                    celular: res.data[0].celular,

                    rua: res.data[0].Endereco.logradouro,
                    cep: res.data[0].Endereco.cep,
                    bairro: res.data[0].Endereco.bairro,
                    cidade: res.data[0].Endereco.cidade,
                    estado: res.data[0].Endereco.estado,
                    numero: res.data[0].Endereco.numero,
                });

            }).catch((error) => {
                console.log(error)
            })
            setLoading(false);
        }
        getPatientInfo();
    }, [idParams]);

    const handleBackButton = () => {
        navigation.goBack();
    }

    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(true);

    const handleAddress = (id) => {
        console.log(id)
        navigation.navigate('Endereco', {
            screen: 'Paciente',
            params: id,
        })
    }


    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
            />
            <ScrollView>
                <PageBody>
                    <HeaderText>
                        Dados do paciente
                    </HeaderText>
                    <ServiceArea>
                        <UserInfoArea>
                            <UserInfo>
                                <UserInfoName>{userInfo.name}</UserInfoName>
                                <NormalText>Tipo sanguíneo: {userInfo.bloodtype}</NormalText>
                                <NormalText>CPF: {userInfo.cpf}</NormalText>
                                <NormalText>Celular: {userInfo.celular}</NormalText>
                                <NormalText>Endereço: </NormalText>
                                <NormalText>CEP {userInfo.cep}</NormalText>
                                <NormalText>Rua {`${userInfo.rua}, Número${userInfo.numero} - Bairro${userInfo.bairro}`}</NormalText>
                                <NormalText>Cidade {`${userInfo.cidade} - Estado${userInfo.estado}`}</NormalText>

                            </UserInfo>
                            <UserFavButton>
                                <FavoriteIcon width="24" height="24" color="black" />
                            </UserFavButton>
                        </UserInfoArea>
                    </ServiceArea>
                </PageBody>
            </ScrollView>


            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" color="#d40054" />
            </BackButton>

            <PatientModal
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedService}
            />
        </Container>
    );
}
