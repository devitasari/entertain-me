import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/home'
import Detail from './screens/detail'
import Favorites from './screens/favorites'
// import Profile from './screens/profile'

// Create Stack Navigator
const homeNavigator = createStackNavigator({
    Home,
    Detail
}, { 
    defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
                backgroundColor: 'gold'
            }
    })
})

//Create Auth Stack Navigator
const authNavigator = createStackNavigator({
    Login,
    Register
}, {
    headerMode: 'none'
})

//Create Main Bottom Navigator
const mainNavigator = createBottomTabNavigator({
    Home: {
        screen: homeNavigator
    },
    Favorites,
}, 
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
            const page = navigation.state.routeName;
            let icon;
            if (page === 'Home')            icon = 'ios-home';
            else if (page === 'Favorites')    icon = 'ios-star';
            else if (page === 'Profile')     icon = 'ios-person';
            return <Ionicons name={icon} size={25} color={tintColor} />;
        },
        tabBarOptions: {
            activeTintColor: 'black',
            style: {
                backgroundColor: 'gold'
            }
        }
    }),
	initialRouteName: 'Home'
})

// Create Switch Navigator
const rootNavigator = createSwitchNavigator({
    authNavigator,
    mainNavigator,
},
{
    // initialRouteName: 'authNavigator'
})

export default createAppContainer(rootNavigator)