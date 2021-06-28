import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Login = props => {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.text}>{"Login with google account"}</Text>
        // </View>
        <View style={styles.container}>
            <Text style={styles.text}>{'Login with google account'}</Text>
            <Pressable onPress={props.onGoogleSignIn} style={styles.button}>
                <Text style={styles.text}>{'Login with google account'}</Text>
            </Pressable>
            <Pressable onPress={props.onFacebookSignIn} style={styles.button}>
                <Text style={styles.text}>{'Login with facebook account'}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#3474eb',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default Login;
