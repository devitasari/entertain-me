import React, { Component, setState } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, Image } from 'react-native';
import { connect } from 'react-redux'
import { RectButton } from 'react-native-gesture-handler';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { addFavorite } from '../store/action'
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false
        }
    }

    componentDidMount() {
        this.setState({
            status: false
        })
    }

    handleFavorite = (data) => {
        this.props.addFavorite({
            name: data.name,
            image: data.image,
        })
        this.setState({
            status: `${data.name} added to favorite succesfully`
        })
    }

    renderStatus = () => {
        return (
            <Text style={styles.alert}>{this.state.status}</Text>
        )
    }

    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <RectButton style={styles.leftAction} onPress={this.close}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                </Animated.Text>
            </RectButton>
        );
    };

    updateRef = ref => {
        this._swipeableRow = ref;
    };
    close = () => {
        this._swipeableRow.close();
    };
    render() {
        const data = this.props.navigation.getParam('data')

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{data.name}</Text>
                {this.state.status && this.renderStatus()}
                <Swipeable
                    ref={this.updateRef}
                    friction={2}
                    leftThreshold={30}
                    renderLeftActions={this.renderLeftActions}
                >
                    <GestureRecognizer
                        onSwipe={() => this.handleFavorite(data)}
                    >
                        <Image
                            style={styles.image}
                            source={{ uri: `${data.image}` }}
                        ></Image>
                    </GestureRecognizer>
                </Swipeable>
                <View>
                    <Text style={styles.description}>
                        {data.name} was born at {data.dateOfBirth}.{'\n'}
                        {data.name.split(' ')[0]} born as {data.ancestry} citizen of Hogwartz.{'\n'}
                        {data.name.split(' ')[0]} have a {data.eyeColour} eye color and {data.hairColour} hair colour.{'\n'}
                        {data.name.split(' ')[0]} is member of {data.house} house.
                    </Text>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (payload) => dispatch(addFavorite(payload))
    }
}

const styles = StyleSheet.create({
    card: {
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
    },
    description: {
        color: 'gold',
        textAlign: 'center'
    },
    alert: {
        color: 'black',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'green',
        borderRadius: 5
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: 'gold',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    image: {
        width: 200,
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        borderColor: 'gold',
        borderWidth: 0.5,
        borderRadius: 10
    },
    leftAction: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    actionText: {
        color: 'black',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    }
});

export default connect(null, mapDispatchToProps)(Detail)