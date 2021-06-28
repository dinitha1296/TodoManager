import React from 'react';
import {StyleSheet, View} from 'react-native';

import NavigationItem from './NavigationItem';
import navigationItemValues from '../constants/navigationItemsValues';

const BottomNavigation = props => {
    const {TODO, DONE, LOGOUT} = navigationItemValues;
    const {changeSelection, onSignOut, isSelected} = props;

    const onPress = item => () => {
        changeSelection(item);
        item.onPress();
    };

    LOGOUT.onPress = onSignOut;

    return (
        <View style={styles.container}>
            <NavigationItem
                style={styles.items}
                selected={isSelected(TODO)}
                data={TODO}
                onPress={onPress(TODO)}
            />
            <NavigationItem
                style={styles.items}
                selected={isSelected(DONE)}
                data={DONE}
                onPress={onPress(DONE)}
            />
            {/* <NavigationItem
                style={styles.items}
                selected={isSelected(LOGOUT)}
                data={LOGOUT}
                onPress={onPress(LOGOUT)}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        elevation: 10,
    },
    items: {
        flex: 1,
    },
});

export default BottomNavigation;
