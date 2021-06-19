import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFAFA;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: black;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 30px;
    height: 36px;
`;

export const LocationArea = styled.View`
    background-color: #FFF5EE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
    border: 3px solid #13132B;
`;

export const LocationInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    font-weight: bold;
`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;