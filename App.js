import React, {Component} from 'react';
import { set } from './src/redux/modules/todo';
import ExcerciseList from './src/Components/ExcerciseList';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExcerciseView from './src/Components/ExcerciseView';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import { SafeAreaView } from 'react-native';
import ExcerciseItem from './src/Components/ExcerciseItem';

const store = configureStore(
  {excercises: 
    {
    "situps": {sets: 5, setsCompleted: 2, reps: 6, time: null}, 
    "pushups": {sets: 3, setsCompleted: 2, reps: 5, time: null},
    "thing1": {sets: 4, setsCompleted: 0, reps: 500, time: null},
    "thing2": {sets: 1, setsCompleted: 0, reps: 3, time: '20'},
    "thing3": {sets: 1, setsCompleted: 0, reps: 3, time: '20'},
    }
}
);


class App extends Component {

  render() {
    if (this.props.excercises === null) {
      return null;
    }
    console.log("this.props.navigation from app", this.props.navigation);
    return (
        <Provider store={store}>
          <SafeAreaView style={{flex: 1}}>
            <ExcerciseList navigation={this.props.navigation}/>
          </SafeAreaView>
        </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    ExcerciseView: {
      screen: ExcerciseView
    },
    ExcerciseList: {
      screen: ExcerciseList
    },
    ExcerciseItem: {
      screen: ExcerciseItem
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator);
