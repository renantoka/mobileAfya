import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    Modal, ModalArea, ModalBody, ModalItem,
    UserInfo, UserName,
    CloseButton,
    DateInfo, DatePrevArea, DateTitleArea, DateTitle, DateNextArea,
    DateList, DateItem, DateItemWeekDay, DateItemNumber,
    TimeList, TimeItem, TimeItemText,
    FinishButton, FinishButtonText
} from './PatientModalStyles';

import MinusIcon from '../assets/icons/minus.svg'
import NavPrevIcon from '../assets/icons/arrow-left.svg'
import NavNextIcon from '../assets/icons/arrow-right.svg'

import { useNavigation } from '@react-navigation/native';

const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

const days = [
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sex',
    'Sab',
];

export default ({ show, setShow, user }) => {

    const navigation = useNavigation();

    const [selectedYear, setSelectedYear] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedHour, setSelectedHour] = useState(null);
    const [listDays, setListDays] = useState([]);
    const [listHours, setListHours] = useState([]);

    useEffect(() => {
        if (user.available) {
            let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
            let newListDays = [];

            for (let i = 1; i <= daysInMonth; i++) {
                let d = new Date(selectedYear, selectedMonth, i);
                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                let day = d.getDate();
                month = month < 10 ? '0' + month : month;
                day = day < 10 ? '0' + day : day;
                let selectedDate = year + '-' + month + '-' + day;

                let availability = user.available.filter(e => e.date === selectedDate);

                newListDays.push({
                    status: availability.length > 0 ? true : false,
                    weekday: days[d.getDay()],
                    number: i
                });
            }
            setListDays(newListDays);
            setSelectedDay(0);
            setListHours([]);
            setSelectedHour(0);
        }
    }, [selectedMonth, selectedYear]);

    useEffect(() => {
        let today = new Date();
        setSelectedYear(today.getFullYear());
        setSelectedMonth(today.getMonth());
        setSelectedDay(today.getDate());
    }, []);

    useEffect(() => {
        if (user.available && selectedDay > 0) {
            let d = new Date(selectedYear, selectedMonth, selectedDay);
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let day = d.getDate();
            month = month < 10 ? '0' + month : month;
            day = day < 10 ? '0' + day : day;
            let selectedDate = year + '-' + month + '-' + day;

            let availability = user.available.filter(e => e.date === selectedDate);

            if (availability.length > 0) {
                setListHours(availability[0].hours)
            }
        }
        setSelectedHour(null);
    }, [user, selectedDay]);

    const handleLeftDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth(mountDate.getMonth() - 1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth());
        setSelectedDay(0);
    }

    const handleRightDateClick = () => {
        let mountDate = new Date(selectedYear, selectedMonth, 1);
        mountDate.setMonth(mountDate.getMonth() + 1);
        setSelectedYear(mountDate.getFullYear());
        setSelectedMonth(mountDate.getMonth());
        setSelectedDay(0);
    }

    const handleCloseButton = () => {
        setShow(false);
    }

    const handleFinishClick = async () => {
        if (
            selectedYear > 0 /* &&
            selectedMonth > 0 &&
            selectedDay > 0 &&
            selectedHour != null */
        ) {
            let token = await AsyncStorage.getItem('token')
            console.log(token)


            /* const data = {
                userid,
                service,
                selectedYear,
                selectedMonth,
                selectedDay,
                hora_atendimento: selectedHour
            }; */

            /* let res = await Api.post(`/attendance/${id}`, data{
            headers: {
                'Authorization': `Bearer token`
            },
            // passar data_atendimento, hora_atendimento, valor, paciente_id, especialista_id
           
        )
        if (res.error == '') {
            setShow(false);
            navigation.navigate('Appointments')
        } else {
            alert(res.error);
        } */
            setShow(false);
            alert('Consulta agendada com sucesso!')/* 
            navigation.navigate('Dash') */
        } else {
            alert("Preencha todos os dados")
        }
    }

    return (
        <Modal
            transparent={true}
            visible={show}
            animationType='slide'
        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress={handleCloseButton}>
                        <MinusIcon width="20" height="40" color="black" />
                    </CloseButton>

                    <ModalItem>
                        <UserInfo>
                            <UserName>{user.name}</UserName>
                        </UserInfo>
                    </ModalItem>

                    <ModalItem>
                        <DateInfo>
                            <DatePrevArea onPress={handleLeftDateClick} >
                                <NavPrevIcon width='35' height='35' color='green' />
                            </DatePrevArea>
                            <DateTitleArea>
                                <DateTitle> {months[selectedMonth]} {selectedYear}</DateTitle>
                            </DateTitleArea>
                            <DateNextArea onPress={handleRightDateClick}>
                                <NavNextIcon width='35' height='35' color='green' />
                            </DateNextArea>
                        </DateInfo>
                        <DateList horizontal={true} showsHorizontalScrollIndicator={false}  >
                            {listDays.map((item, key) => (
                                <DateItem key={key}
                                    onPress={() => item.status ? setSelectedDay(item.number) : null}
                                    style={{
                                        opacity: item.status ? 1 : 0.5,
                                        backgroundColor: item.number === selectedDay ? '#d40054' : '#FFFFFF'
                                    }}
                                >
                                    <DateItemWeekDay
                                        style={{
                                            color: item.number === selectedDay ? '#FFFFFF' : '#000000'
                                        }}
                                    >{item.weekday}</DateItemWeekDay>
                                    <DateItemNumber>{item.number}</DateItemNumber>
                                </DateItem>
                            ))}
                        </DateList>
                    </ModalItem>

                    <ModalItem>
                        <TimeList horizontal={true} showsHorizontalScrollIndicator={false}>
                            {listHours.map((item, key) => (
                                <TimeItem
                                    key={key}
                                    onPress={() => setSelectedHour(item)}
                                    style={{
                                        backgroundColor: item === selectedHour ? '#d40054' : '#FFFFFF'
                                    }}
                                >
                                    <TimeItemText
                                        style={{
                                            color: item === selectedHour ? '#FFFFFF' : '#000000',
                                            fontWeight: item === selectedHour ? 'bold' : 'normal'
                                        }}
                                    >{item}</TimeItemText>
                                </TimeItem>
                            ))}
                        </TimeList>
                    </ModalItem>

                    <FinishButton onPress={handleFinishClick}>
                        <FinishButtonText>Marcar consulta</FinishButtonText>
                    </FinishButton>
                </ModalBody>
            </ModalArea>
        </Modal>
    );
}
