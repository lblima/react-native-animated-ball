//import liraries
import React, { Component } from 'react';
import { View, PanResponder, Animated, StyleSheet } from 'react-native';

// create a component
class Ball extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: () => {}
        });

        this.state = { panResponder, position };
    }
    render() {
        return (
            <Animated.View 
                style={this.state.position.getLayout()}
                {...this.state.panResponder.panHandlers}
            >
                <View style={styles.ball} />
            </Animated.View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    ball: {
        height: 80,
        width: 80,
        borderColor: 'black',
        borderRadius: 40,
        borderWidth: 40
    },
});

//make this component available to the app
export default Ball;
