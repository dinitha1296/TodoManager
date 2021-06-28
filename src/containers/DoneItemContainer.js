import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import DoneItem from '../components/DoneItem';

const DoneItemContainer = props => {
    const {items, onRemove} = props;

    if (items === null || items.length === 0) {
        return (
            <View style={[styles.container, styles.emptyContainer]}>
                <Text style={styles.emptyText}>
                    {'No completed tasks to display'}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <DoneItem todo={item} onRemove={onRemove(item)} />
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

export default DoneItemContainer;
