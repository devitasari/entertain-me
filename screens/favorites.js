import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PanResponder, Dimensions, Animated, StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Card from '../components/card'
import DoubleClick from 'react-native-double-tap'
import { deleteFavorite } from '../store/action'

export default function favorites() {
    const favorites = useSelector(state => state.favoriteCharacters)
    const dispatch = useDispatch()

    function handleDoubleTab(data) {
        dispatch(deleteFavorite(data))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Favorite Characters</Text>
            <ScrollView>
                    <View style={styles.main}>
                        {
                            favorites
                            .map((char,i) => (
                                <DoubleClick 
                                key={i}
                                doubleTap={() => {handleDoubleTab(i)}}
                                >
                                    <Card char={char} />
                                </DoubleClick>
                            ))
                        }
                    </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
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