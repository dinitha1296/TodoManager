import React, {useState} from 'react';
import {
    Pressable,
    StyleSheet,
    Modal,
    Text,
    View,
    TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TitlBar from './TitileBar';
import {getHNM} from '../utills/dateParser';
import closeIconXmlString from '../../assets/times-circle-regular';
import IdContext from '../context/IdContext';

const DateTimeDisplay = props => {
    return (
        <Pressable style={[props.style, styles.fields]} onPress={props.onPress}>
            <Text style={styles.fieldText}>{props.dateTime}</Text>
        </Pressable>
    );
};

const AddTaskDialog = props => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [task, changeTask] = useState('');
    const [dueDate, changeDueDate] = useState(tomorrow);
    const [datePickerSelected, selectDatePicker] = useState(false);
    const [timePickerSelected, selectTimePicker] = useState(false);

    const getTask = (nextId, changeNextId) => {
        changeNextId(nextId + 1);
        return {
            id: nextId,
            key: String(nextId),
            text: task.trim(),
            assignedOn: new Date(),
            dueDate: new Date(dueDate),
        };
    };

    return (
        <IdContext.Consumer>
            {taskIdData => (
                <Modal visible={props.visible} onRequestClose={props.onClose}>
                    <TitlBar title={'Add Task'} />
                    <Pressable style={styles.closeBtn} onPress={props.onClose}>
                        <SvgXml
                            xml={closeIconXmlString}
                            style={styles.closeBtnIcon}
                        />
                    </Pressable>
                    <View style={styles.container}>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.fields}>{'Task'}</Text>
                            <TextInput
                                style={styles.fieldText}
                                onChangeText={changeTask}
                            />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Text style={styles.fields}>{'Due date'}</Text>
                            <View style={styles.dateTimeDisplayContainer}>
                                <DateTimeDisplay
                                    dateTime={dueDate.toLocaleDateString()}
                                    onPress={() => {
                                        selectDatePicker(true);
                                    }}
                                />
                                <DateTimePickerModal
                                    isVisible={datePickerSelected}
                                    date={dueDate}
                                    mode={'date'}
                                    onCancel={() => selectDatePicker(false)}
                                    onConfirm={datetime => {
                                        selectDatePicker(false);
                                        changeDueDate(datetime);
                                    }}
                                    is24Hour={true}
                                    minimumDate={today}
                                />
                                <DateTimeDisplay
                                    dateTime={getHNM(dueDate)}
                                    onPress={() => {
                                        selectTimePicker(true);
                                    }}
                                />
                                <DateTimePickerModal
                                    isVisible={timePickerSelected}
                                    date={dueDate}
                                    mode={'time'}
                                    onCancel={() => selectTimePicker(false)}
                                    onConfirm={datetime => {
                                        selectTimePicker(false);
                                        changeDueDate(datetime);
                                    }}
                                    is24Hour={true}
                                    minimumDate={today}
                                />
                            </View>
                        </View>
                    </View>
                    <Pressable
                        style={styles.submitBtn}
                        onPress={() => {
                            console.log(taskIdData);
                            if (task.trim() === '') {
                                return;
                            }
                            const newTask = getTask(
                                taskIdData.nextId,
                                taskIdData.changeNextId,
                            );
                            console.log(newTask);
                            props.onAddTask(newTask);
                        }}>
                        <Text style={styles.submitBtnText}>{'Add'}</Text>
                    </Pressable>
                </Modal>
            )}
        </IdContext.Consumer>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    fieldContainer: {
        width: '100%',
        marginVertical: 20,
    },
    fields: {
        fontSize: 22,
        color: 'darkred',
    },
    fieldText: {
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 20,
        height: 25,
        paddingVertical: 0,
        marginTop: 10,
    },
    submitBtn: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'darkred',
        height: 40,
        width: 70,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    submitBtnText: {
        color: 'white',
        fontSize: 20,
    },
    dateTimeDisplayContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    closeBtn: {
        height: 50,
        width: 50,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        position: 'absolute',
        top: 5,
        right: 5,
    },
    closeBtnIcon: {
        color: 'white',
        height: 40,
        width: 40,
    },
});

export default AddTaskDialog;
