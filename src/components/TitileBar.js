import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import ProfileIcon from './ProfileIcon';

const TitlBar = props => {
    return (
        <View style={styles.contaier}>
            <Text style={styles.text}>{String(props.title)}</Text>
            <ProfileIcon
                style={styles.profile}
                onPress={() => {}}
                iconUrl={null}
                size={30}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contaier: {
        backgroundColor: 'darkred',
        height: 60,
        display: 'flex',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        // shadowColor: 'black',
        // shadowOpacity: 0.1,
        // shadowRadius: 1,
        // shadowOffset: {
        //     height: 1,
        //     width: 0,
        // },
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    text: {
        color: 'white',
        fontSize: 26,
        flex: 1,
    },
    profile: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'transparent',
    },
});

export default TitlBar;
