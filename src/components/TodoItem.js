import React from 'react';
import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ProfileIcon from './ProfileIcon';
import toDateString from '../utills/dateParser';
import calanderIconXmlString from '../../assets/calendar-plus-regular';

const doneLabelRander = (progress, xValue) => {
    return (
        <View style={styles.doneLabel}>
            <Animated.Text style={styles.doneText}>Mark as done</Animated.Text>
        </View>
    );
};

const TodoItem = props => {
    // const pan = useRef(new Animated.ValueXY()).current;

    // const panResponder = useRef(
    //     PanResponder.create({
    //         onMoveShouldSetPanResponder: () => true,
    //         onPanResponderGrant: () => {
    //             pan.setOffset({
    //                 x: pan.x._value,
    //                 y: pan.y._value
    //             });
    //         },
    //         onPanResponderMove: Animated.event(
    //             [
    //                 null,
    //                 { dx: pan.x, dy: pan.y }
    //             ],
    //             {useNativeDriver: false}
    //         ),
    //         onPanResponderRelease: () => {
    //             Animated.spring(pan, {toValue: 0, useNativeDriver: true}).start();
    //         }
    //     })
    // ).current;

    return (
        // <Animated.View
        //     style={{
        //         transform: [{ translateX: pan.x }, { translateY: 0 }]
        //     }}
        //     {...panResponder.panHandlers}
        //     >
        <Swipeable
            renderRightActions={doneLabelRander}
            onSwipeableRightOpen={props.onRemove}>
            <View style={styles.container}>
                <View style={[styles.subContainers, styles.textContainer]}>
                    <Text style={styles.title}>{props.todo.text}</Text>
                    <View style={styles.dateContainer}>
                        <SvgXml
                            xml={calanderIconXmlString}
                            style={styles.dateIcon}
                        />
                        <Text style={styles.date}>
                            {toDateString(props.todo.assignedOn)}
                        </Text>
                    </View>
                </View>
                <View style={[styles.subContainers]}>
                    {/* <View style={styles.empty} /> */}
                    <Pressable onPress={() => {}} style={styles.empty} />
                    <ProfileIcon
                        style={styles.profileIcon}
                        onPress={() => {}}
                        iconUrl={null}
                        size={25}
                    />
                </View>
            </View>
        </Swipeable>
        /* </Animated.View> */
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 2,
        display: 'flex',
        flexDirection: 'row',
        elevation: 5,
    },
    subContainers: {
        display: 'flex',
    },
    textContainer: {
        flex: 1,
    },
    empty: {
        flex: 1,
        // backgroundColor: 'green', //TODO: Remove this
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
    },
    doneLabel: {
        backgroundColor: 'green',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%',
    },
    doneText: {
        fontSize: 18,
        padding: 10,
        color: 'white',
        marginLeft: 'auto',
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateIcon: {
        color: 'black',
        height: 14,
        width: 14,
        marginRight: 4,
    },
});

export default TodoItem;
