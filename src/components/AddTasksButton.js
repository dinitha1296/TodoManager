import React, {useState} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';

import addIconXmlString from '../../assets/plus-solid';
import AddTaskDialog from './AddTaskDialog';

const AddTasksButton = props => {
    const [isDialogOpen, changeDialog] = useState(false);

    const onAddTask = task => {
        props.onAddTask(task);
        changeDialog(false);
    };

    return (
        <Pressable style={styles.addButton} onPress={() => changeDialog(true)}>
            <SvgXml xml={addIconXmlString} style={styles.addIcon} />
            <AddTaskDialog
                visible={isDialogOpen}
                onClose={() => changeDialog(false)}
                onAddTask={onAddTask}
                nextId={props.changeId}
                changeNextId={props.changeNextId}
            />
        </Pressable>
    );
};

const size = 65;
const sideGap = 30;
const bottomNavBarGap = 60;

const styles = StyleSheet.create({
    addButton: {
        height: size,
        width: size,
        position: 'absolute',
        backgroundColor: 'darkred',
        borderRadius: size / 2,
        bottom: sideGap + bottomNavBarGap,
        right: sideGap,
        // borderWidth: 0.5,
        // borderStyle: 'solid',
        // borderColor: 'grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    addIcon: {
        color: 'white',
        height: 0.5 * size,
        width: 0.5 * size,
    },
});

export default AddTasksButton;
