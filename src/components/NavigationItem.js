import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {SvgCss} from 'react-native-svg';

const NavigationItem = props => {
    const style = StyleSheet.create({
        ...navItemStyle,
        container: {
            ...props.style,
            ...navItemStyle.container,
        },
    });

    const styleSelected = StyleSheet.create({
        ...style,
        container: {
            ...style.container,
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        image: {
            ...style.image,
            color: 'darkred',
            fontWeight: '700',
        },
        text: {
            ...style.text,
            color: 'darkred',
            fontWeight: '700',
        },
    });

    const getStyle = () => (props.selected ? styleSelected : style);

    return (
        <Pressable onPress={props.onPress} style={getStyle().container}>
            <SvgCss xml={props.data.svgXmlString} style={getStyle().image} />
            <Text style={getStyle().text}>{props.data.title}</Text>
        </Pressable>
    );
};

const navItemStyle = StyleSheet.create({
    image: {
        height: 20,
        width: 20,
        color: 'black',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
    },
});

export default NavigationItem;
