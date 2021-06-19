import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../contexts/UserContext';
import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import CalendarIcon from '../assets/icons/calendar.svg';
import FavoriteIcon from '../assets/icons/star.svg';
import UserIcon from '../assets/icons/user.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #d40054;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #d40054;
    margin-top: -20px;
`;

const AvatarIcon = styled.Image` 
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {

    const { state: user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Dash')}>
                <HomeIcon
                    style={{ opacity: state.index === 0 ? 1 : 0.5 }}
                    width="24" height="24" color="white"
                />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon
                    style={{ opacity: state.index === 1 ? 1 : 0.5 }}
                    width="24" height="24" color="white"
                />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <CalendarIcon
                    width="32" height="32" color="#d40054"
                />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon
                    style={{ opacity: state.index === 3 ? 1 : 0.5 }}
                    width="24" height="24" color="white"
                />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar != '' ?
                    <AvatarIcon source={{ uri: user.avatar }} />
                    :
                    <UserIcon
                        style={{ opacity: state.index === 4 ? 1 : 0.5 }}
                        width="24" height="24" color="white"
                    />
                }
            </TabItem>
        </TabArea>
    );
}
