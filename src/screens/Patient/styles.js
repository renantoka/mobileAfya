
import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: whitesmoke;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 90%;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
    
`;

export const FakeSwiper = styled.View`
    height: 240px;
    background-color: azure;
`;

export const PageBody = styled.View`
    background-color: #FFF;
    border-top-left-radius: 50px;
    margin-top: 90px;
    height: 90%;
    width: 70%;
    border: 2px solid black;
`;

export const ServiceArea = styled.View`

`;
export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: 40px;

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
`;
export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: grey;
    border: 2px solid black;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;
export const TestimonialArea = styled.View`

`;

export const SwipeItem = styled.View`
    flex: 1;
    background-color: #FFF;
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
`;