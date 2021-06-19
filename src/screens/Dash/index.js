import React, { useState, useEffect } from 'react';
import { PlatformColor } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { rerquest, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    LoadinIcon

} from './styles';

import SearchIcon from '../../assets/icons/search.svg';
import MyLocationIcon from '../../assets/icons/map-pin.svg';

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    // zera as coordenadas e verifica qual plataforma está sendo utilizada para pedir permissão de uso.
    const handleLocationFinder = async () => {
        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (result == 'granted') {
            setLoading(true);
            setLocationText('');
            setList([]);

            Geolocation.getCurrentPosition((info) => {
                setCoords(info.coords);
                getDoctors();
            });
        }
    }

    const getDoctors = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getDoctors();
        if (res.error == '') {
            if (res.loc) {
                setLocationText(res.loc);
            }

            setList(res.data)

        } else {
            alert('Erro: ' + res.error);
        }

        setLoading(false);
    }

    useEffect(() => {
        getDoctors();
    }, []);

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                        Encontre aqui o seu médico
                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" color="black" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t => setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" color="black" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadinIcon size="large" color="white" />
                }

                <ListArea>
                    {list.map((item, k) => (
                        <DoctorItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}
