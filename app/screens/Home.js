import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
}
    from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>

            <Text>Merhaba Hilolll naparsın</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        padding: 40,
        paddingTop: 100,
        alignItems: 'center',
        flex: 1
    }
})