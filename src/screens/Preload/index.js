import React, { useEffect, useContext } from 'react';
import { Image } from 'react-native';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';

import afyaLogo from '../../assets/img/logo.png';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    /*   useEffect(() => {
          const checkToken = async () => {
              const token = await AsyncStorage.getItem('token');
              if (token !== null) {
                  let res = await Api.checkToken(token);
                  if (res.token) {
  
                      await AsyncStorage.setItem('token', res.token);
  
                      userDispatch({
                          type: 'setAvatar',
                          payload: {
                              avatar: res.data.avatar
                          }
                      });
  
                      navigation.reset({
                          routes: [{ name: "Dash" }]
                      });
                  } else {
                      navigation.navigate("Dash")
                  }
              } else {
                  navigation.navigate("Dash");
              }
          }
          checkToken();
      }, []); */
    return (
        <Container>
            <Image
                source={afyaLogo}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
            />

            <LoadingIcon size="large" color="#FFFFFF" />

        </Container>
    );
}