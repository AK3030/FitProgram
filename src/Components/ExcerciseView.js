import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Timer from './Timer';

const TitleBar = styled.View`
  background-color: blue;
  opacity: .5;
  flex-direction: row;
  justify-content: center;
`

const TitleText = styled.Text`
  font-size: 30;
`

const InfoText = styled.Text`
  font-size: 22;
`

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: green;
  opacity: .5;
  padding-right: 3;
  padding-left: 3;
  width: 100%;
`

const MainView = styled.View`
  align-items: center;
`

const SetRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: yellow;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`

class ExcerciseView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let name = this.props.navigation.getParam("name");
    let arr = Array(4);
    console.log("array", arr);
    console.log("excerise reps", this.props.excercise);
    return (
      <MainView>
        <TitleBar>
          <TitleText>{name}</TitleText>
        </TitleBar>
        <InfoRow>
          <InfoText>Sets: {this.props.excercise.sets}</InfoText>
          <InfoText>Reps: {this.props.excercise.reps}</InfoText>
        </InfoRow>
        <SetRow>
          {
            Array(this.props.excercise.sets).fill(<Timer startTime={12}></Timer>)
          }
          
        </SetRow>
        
      </MainView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    excercise: state.excercises[ownProps.navigation.getParam("name")]
  }
  
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, null)(ExcerciseView);