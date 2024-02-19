import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default function favorites() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        color: 'gold',
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'gold',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    image: {
        width: 100, 
        height: 150, 
        marginTop: 20, 
        marginBottom: 20,
        borderColor: 'gold', 
        borderWidth: 0.5
    }
})