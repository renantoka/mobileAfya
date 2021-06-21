import React from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import BackIcon from '../../assets/icons/arrow-left.svg'

export default ({ IconSvg, onPress = { handleBackButton } }) => {
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
    }
    return (
        <BackButton onPress={handleBackButton}>
            <BackIcon width="44" height="44" color="#d40054" />
        </BackButton>
    )
}