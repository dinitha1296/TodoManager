/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    // useColorScheme,
} from 'react-native';

import Todos from './src/pages/Todos';
import Login from './src/pages/Login';
import authServices from './src/services/auth';

const App = () => {
    // const isDarkMode = useColorScheme() === 'dark';

    const [user, setUser] = useState(true);

    if (!user) {
        return (
            <Login
                onGoogleSignIn={authServices.onGoogleSignIn(
                    setUser,
                    console.log,
                )}
                onFacebookSignIn={authServices.onFacebookSignIn(
                    setUser,
                    console.log,
                )}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'light-content'}
                // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor="darkred"
            />
            <Todos onSignOut={authServices.onSignOut(setUser, console.log)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusbar: {
        color: 'red',
    },
});

export default App;
