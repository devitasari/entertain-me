import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Card from '../components/card'
import { getData } from '../store/action'

export default function home(props) {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.data)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
            <View style={styles.container}>
                <Text style={styles.title}>School of Wizardz</Text>
                <TextInput 
                style={styles.search} 
                placeholder="Search by name..."
                onChangeText={(input) => setFilter(input)}
                ></TextInput>
                <ScrollView>
                    <View style={styles.main}>
                        {
                            characters
                            .filter(char => char.name.match(new RegExp(filter, 'i')))
                            .map((char,i) => (
                                <TouchableOpacity key={i} onPress={() => props.navigation.navigate('Detail', {data: char})}>
                                    <Card char={char} />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        textAlign: 'center',
        width: 200,
        height: 30,
        marginBottom: 20,
        borderColor: 'gold',
        borderRadius: 10,
        borderWidth: 0.5,
        color: 'gold'
    },
    main: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 28,
        color: 'gold',
        marginBottom: 15
    }
})