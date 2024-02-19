import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function register(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        if (email !== '' && password !== '') {
            props.navigation.navigate('Home')
        }    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Insert email"
                onChangeText={(input) => setEmail(input)}
             />
            <TextInput
                style={styles.input}
                placeholder="Insert password"
                secureTextEntry={true}
                onChangeText={(input) => setPassword(input)}
                type="password"
             />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.link}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text 
                    style={styles.textLink}
                    onPress={handleRegister}
                    > Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
    },
    textLink: {
        marginTop: 30,
        color: 'gold',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    button: {
        backgroundColor: 'gold',
        height: 30,
        width: 70,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        marginTop: 5
    },
    text: {
        marginTop: 30,
        textAlign: 'center',
        color: 'gold'
    },
    title: {
        fontSize: 25,
        color: 'gold',
        marginBottom: 50
    },
    container : {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginBottom: 10,
        textAlign: 'center',
        width: 200,
        height: 40,
        borderColor: 'gold',
        borderWidth: 0.5,
        borderRadius: 10,
        color: 'gold'
    }
})