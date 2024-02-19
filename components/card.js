import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Card(props) {
    const name = props.char.name
    const image = props.char.image

    return (
        <View>
            <Image
            style={styles.image}
            source={{uri:`${image}`}}
            ></Image>
            <View style={styles.label}>
                <Text style={styles.title}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        marginTop: -16,
        marginLeft: 5,
        backgroundColor: 'black',
        borderRightColor: 'gold',
        borderLeftColor: 'gold',
        width: 100,
        borderWidth: 0.5
    },
    title: {
        color: 'gold',
        fontSize: 11,
        textAlign: 'center'
    },
    image: {
        width: 100, 
        height: 150, 
        marginTop: 20, 
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'gold', 
        borderWidth: 0.5
    }
})