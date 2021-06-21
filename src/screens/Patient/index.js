import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import PatientModal from '../../components/PatientModal';

import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    TestimonialArea,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton,
    BloodType

} from './styles';


import BackIcon from '../../assets/icons/arrow-left.svg'
import FavoriteIcon from '../../assets/icons/star.svg'

import { useNavigation, useRoute } from '@react-navigation/native';

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

            const json = await Api.get(`/patient/${2}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data.nome)
                console.log(res.data[0].tipo_sanguineo)
                console.log(res.data[0].nome)

                setUser(false)

                setUserInfo({
                    id: 1,
                    name: res.data[0].nome,
                    bloodtype: res.data[0].tipo_sanguineo,

                });

            }).catch((error) => {
                console.log(error)
            })


            setLoading(false);
        }
        getPatientInfo();
    }, []);

    const handleBackButton = () => {
        navigation.goBack();
    }

    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(true);

    const handleServiceChoose = (key) => {
        setSelectedService(key);
        setShowModal(false);
    }

    return (
        <Container>

            <PageBody>
                <ServiceArea>
                    <UserInfoArea>
                        <UserInfo>
                            <UserInfoName>Paciente: {userInfo.name}</UserInfoName>
                            <BloodType>Tipo sanguíneo: {userInfo.bloodtype}</BloodType>
                        </UserInfo>
                        <UserFavButton>
                            <FavoriteIcon width="24" height="24" color="#FFFFFF" />
                        </UserFavButton>
                    </UserInfoArea>

                </ServiceArea>
                <TestimonialArea>

                </TestimonialArea>

            </PageBody>
            {/* ) :
                    <FakeSwiper></FakeSwiper>
                } */}

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
