import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/index.js'
import 'react-native-gesture-handler';
import Navigation from './Navigation'
import Login from './screens/login'
import Register from './screens/register'
import Home from './screens/home'
import Detail from './screens/detail'

export default function App() {
  return (
    <Provider store={store}>
       <Navigation>
            <Home />
       </Navigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
