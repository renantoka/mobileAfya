import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    width: 60%;
    background-color: #d40054;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF
`;