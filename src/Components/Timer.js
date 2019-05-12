import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainDiv = styled.View`
    background-color: pink;
    opacity: .5;
    width: 50;
    height: 50;
    align-items: center;
    justify-content: center;
    border-radius: 50;
    flex-grow: 0;
`

const TimerButton = styled.Button`
`

const TimeField = styled.Text`
    font-size: 20;
`

class ExcerciseView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.startTime,
            finished: false
        };
    }

    startTimer = () => {
        if (this.state.time > 0) {
            this.timerKey = setInterval(this.decrementTimer, 1000);
        }
    }

    decrementTimer = () => {
        console.log("interval print");
        this.setState((state, props) => ({time: state.time - 1}))
    }

    render() {
        if (this.state.time <= 0) {
            clearInterval(this.timerKey);
        }

        return (
            <TouchableOpacity onPress={this.startTimer}>
                <MainDiv>
                    {
                        this.state.time === 0?
                        <Text>Done</Text>
                        :
                        <TimeField>{this.state.time}</TimeField>
                    }
                    
                </MainDiv>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({

})

export default ExcerciseView;