import React, { useState, useEffect } from 'react';
import { Platform, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
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

import PatientItem from '../../components/PatientItem';

import SearchIcon from '../../assets/icons/search.svg';
import MyLocationIcon from '../../assets/icons/map-pin.svg';

export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

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
                getPatients();
            });
        }
    }

    /*     const getPatients = async () => {
            setLoading(true);
            setList([]);

            let lat = null;
            let lng = null;
            if(coords) {
                lat = coords.latitude;
                lng = coords.longitude;
            }
    
            let res = await Api.getPatients(lat, lng, locationText);
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
            getPatients();
        }, []); */

    const onRefresh = () => {
        setRefreshing(false);
        //inserir pacientes aqui getPatients();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getPatients();
    }

    return (
        <Container>
            <Scroller refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } >

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                        Encontre aqui o seu paciente
                    </HeaderTitle>
                    <SearchButton onPress={() => navigation.navigate('Search')}>
                        <SearchIcon width="28" height="28" color="black" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="black"
                        value={locationText}
                        onChangeText={t => setLocationText(t)}
                        onEndEditing={handleLocationSearch}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" color="black" />
                    </LocationFinder>
                </LocationArea>

                {loading &&
                    <LoadinIcon size="large" color="white" />
                }

                {/* <ListArea>
                    {list.map((item, k) => (
                        <PatientItem key={k} data={item} />
                    ))}
                </ListArea> */}
            </Scroller>
        </Container>
    );
}

