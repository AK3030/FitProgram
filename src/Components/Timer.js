import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

const MainDiv = styled.View`
    margin-top: 100;
    background-color: pink;
    opacity: .5;
    width: 300;
    height: 300;
    align-items: center;
    justify-content: center;
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
        this.timerKey = setInterval(this.decrementTimer, 1000);
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
            <MainDiv>
                <TimeField>{this.state.time}</TimeField>
                <TimerButton onPress={this.startTimer} title="START"/>
                <TimerButton title="RESET"/>
                <TimerButton title="PAUSE"/>
            </MainDiv>
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