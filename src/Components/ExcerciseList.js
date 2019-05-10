import React, {Component} from 'react';
import styled from 'styled-components';
import {SafeAreaView, Button} from 'react-native';
import ExcerciseItem from './ExcerciseItem';
import { connect } from 'react-redux';
import { set } from '../redux/modules/todo';

const ExcerciseList = styled.FlatList`
  background-color: white; 
  height: 50;
  width: 100%;
`

const Main = styled.View`
  flex: 1;
  background-color: green;
`

class App extends Component {

  testMethod = () => {
    console.log(this.props);
    this.props.addTodo("things")
  }

  render() {
    if (this.props.excercises === null) {
      return null;
    }
    console.log("this.props.navigation from excercise list", this.props.navigation);
    return (
        <Main>
          <ExcerciseList
          data = {this.props.excerciseNames}
          renderItem={({item}) => <ExcerciseItem navigation={this.props.navigation} excerciseInfo={this.props.excercises[item]} name={item}/>}
          keyExtractor={(item, index) => index.toString()}
          />
          <Button 
          title="hello there"
          onPress = {this.testMethod}
          />
        </Main>
    );
  }
}

const mapStateToProps = state => ({
  excerciseNames: Object.keys(state.excercises),
  excercises: state.excercises
});

const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(set(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
