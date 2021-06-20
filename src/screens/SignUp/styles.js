import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFF;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 90%;
`;

export const InputArea = styled.View`
    padding-top: 90px;
    width: 75%;
`;

export const SignInput = styled.View`
    width: 10px;
    height: 10px;
    
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #d40054;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 100px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #202124;    
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #d40054;   
    font-weight: bold;
    margin-left: 5px;
`;