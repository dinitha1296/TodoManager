import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import TodoItem from '../components/TodoItem';

const TodoItemContainer = props => {
    const {items, onRemove} = props;

    if (items === null || items.length === 0) {
        return (
            <View style={[styles.container, styles.emptyContainer]}>
                <Text style={styles.emptyText}>
                    {'No tasks assigned to display'}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <TodoItem todo={item} onRemove={onRemove(item)} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 1,
        paddingHorizontal: 2,
    },
    emptyContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        color: 'darkred',
        fontSize: 21,
    },
});

export default TodoItemContainer;
