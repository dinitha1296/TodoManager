import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

const ProfileIcon = props => {
    return (
        <Pressable
            style={[props.style, styles(props.size).container]}
            onPress={props.onPress}>
            <Image source={props.iconUrl} alt="" />
        </Pressable>
    );
};

const styles = size =>
    StyleSheet.create({
        container: {
            // backgroundColor: 'white',
            backgroundColor: 'transparent',
            height: size,
            width: size,
            borderRadius: size / 2,
            borderStyle: 'solid',
            borderWidth: 0.5,
            // borderColor: 'grey',
            borderColor: 'transparent',
        },
    });

export default ProfileIcon;
