import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    background-color: #d40054;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 50%;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;