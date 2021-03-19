import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
}
from 'react-native';

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Hello World ben yunus</Text>
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        padding:40,
        paddingTop:100,
        alignItems:'center',
        flex:1
    }
})