
import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';



export default function Login() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={{ alignSelf: 'center', width: 200, height: 200, marginBottom: 20, marginTop: 30, }} />
            <TextInput
                placeholder='Enter the password..'
                style={styles.mail}
            />
            <TextInput
                style={styles.password}
                placeholder='Enter the email..'
            />
            <TouchableOpacity style={styles.button}>
                <Text>Click Me</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: 'stretch',
    },
    mail: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 12
    },
    password: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 12
    },
    button: {

        backgroundColor: '#C71585',
        width: 150,
        marginLeft: 60,
        borderRadius: 6,
        padding: 4,
        alignItems: 'center',
    }
})