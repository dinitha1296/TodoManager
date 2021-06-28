import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TodoItemContainer from '../containers/TodoItemContainer';
import DoneItemContainer from '../containers/DoneItemContainer';
import AddTasksButton from '../components/AddTasksButton';
import TitleBar from '../components/TitileBar';
import BottomNavigation from '../components/BottomNavigation';
import navigationItemValues from '../constants/navigationItemsValues';
import IdContext from '../context/IdContext';

class AddBtnWrappedWithContext extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <IdContext.Provider
                value={{
                    nextId: this.props.nextId,
                    changeNextId: this.props.changeNextId,
                }}>
                <AddTasksButton onAddTask={this.props.onAddTask} />
            </IdContext.Provider>
        );
    }
}

const Todos = props => {
    const {TODO, DONE} = navigationItemValues;
    const {onSignOut} = props;
    const isSelected = item => selectedItem.toString() === item.toString();

    const [selectedItem, changeSelection] = useState(TODO);
    const [todoItems, changeTodoItems] = useState([]);
    const [doneItems, changeDoneItems] = useState([]);
    const [nextId, changeNextId] = useState(1);
    const [isLoading, changeLoading] = useState(true);

    const markAsDone = item => () => {
        changeTodoItems(todoItems.filter(todo => todo !== item));
        item.completedOn = new Date();
        changeDoneItems([item, ...doneItems]);
        // try {
        //     AsyncStorage.setItem(item.key, JSON.stringify(item));
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const deleteItem = item => () => {
        changeDoneItems(doneItems.filter(done => done !== item));
        // try {
        //     AsyncStorage.removeItem(item.key);
        // } catch (e) {
        //     console.log(e);
        // }
    };

    const onAddTask = task => {
        changeTodoItems([task, ...todoItems]);
        // try {
        //     AsyncStorage.setItem(task.key, JSON.stringify(task));
        // } catch (e) {
        //     console.log(e);
        // }
    };

    useEffect(() => {
        const readData = async () => {
            const done = [];
            const todo = [];
            try {
                const keys = await AsyncStorage.getAllKeys();
                if (keys === null || keys.length === 0) {
                    return;
                }
                let item = null;
                for (let key of keys) {
                    item = JSON.parse(await AsyncStorage.getItem(key));
                    if (key === 'nextId') {
                        changeNextId(Number(item));
                    }
                    if (item !== null && item instanceof Object) {
                        if (
                            item.completedOn &&
                            item.completedOn instanceof Date
                        ) {
                            done.push(item);
                        }
                        todo.push(item);
                    }
                }
                changeTodoItems(todo);
                changeDoneItems(done);
            } catch (e) {
                console.log(e);
            }
        };
        // readData();
        changeLoading(false);
    }, [changeTodoItems, changeDoneItems, changeLoading]);

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="darkred" />
            </View>
        );
    }

    return (
        <IdContext.Provider value={'abcd'}>
            <View style={styles.container}>
                <TitleBar title={String(selectedItem.toString())} />
                {isSelected(TODO) && (
                    <TodoItemContainer
                        items={todoItems}
                        onRemove={markAsDone}
                    />
                )}
                {isSelected(DONE) && (
                    <DoneItemContainer
                        items={doneItems}
                        onRemove={deleteItem}
                    />
                )}
                {isSelected(TODO) && (
                    <AddBtnWrappedWithContext
                        onAddTask={onAddTask}
                        nextId={nextId}
                        changeNextId={changeNextId}
                    />
                )}
                <BottomNavigation
                    {...{changeSelection, onSignOut, isSelected}}
                />
            </View>
        </IdContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        height: '100%',
        overflow: 'hidden',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Todos;
