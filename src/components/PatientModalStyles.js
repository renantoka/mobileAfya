import styled from 'styled-components/native';

export const Modal = styled.Modal`
`;
export const ModalArea = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;
export const ModalBody = styled.View`
    background-color: #D40054;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;
export const ModalItem = styled.View`
    background-color: whitesmoke;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border: 2px solid black;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const UserName = styled.Text`
    color: black;
    font-size: 18px;
    font-weight: bold;
`;

export const UserSpecialty = styled.Text`
    color: black;
    font-size: 18px;
`;

export const CloseButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
`;

export const DateInfo = styled.View`
    flex-direction: row;
`;

export const DatePrevArea = styled.TouchableOpacity`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const DateTitleArea = styled.View`
    width: 140px;
    justify-content: center;
    align-items: center;
`;

export const DateTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: black;
    align-items: center;
`;

export const DateNextArea = styled.TouchableOpacity`
    flex: 1;
    align-items: flex-start;
`;

export const DateList = styled.ScrollView`
    
`;

export const DateItem = styled.TouchableOpacity`
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
`;

export const DateItemWeekDay = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const DateItemNumber = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const TimeList = styled.ScrollView`
    flex: 1;
`;

export const TimeItem = styled.TouchableOpacity`
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const TimeItemText = styled.Text`
    font-size: 16px;
`;

export const FinishButton = styled.TouchableOpacity`
    background-color: #202124;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid black;
`;

export const FinishButtonText = styled.Text`
color: white;
font-size: 20px;
font-weight: bold;
`;