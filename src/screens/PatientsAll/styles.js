
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: white;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: black;
    align-items: flex-end;
`;
export const PageBody = styled.View`
    background-color: #F8F8FF;
    border-radius: 5px;
    margin-top: 80px;
    height: 95%;
    width: 100%;
    border: 1px solid black;
    justify-content: flex-start;
`;

export const ServiceArea = styled.View`

`;
export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: 10px;
    border: 1px solid black;
    background-color: white;
    padding: 5px;

`;
export const UserInfo = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
`;
export const UserInfoName = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 5px;
`;
export const UserFavButton = styled.TouchableOpacity`
    width: 22px;
    height: 22px;
    background-color: #F8F8FF;
    border-radius: 11px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
`;

export const BloodType = styled.Text`
    color: black;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 5px;
`;