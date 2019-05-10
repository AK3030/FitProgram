import React, {Component} from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/redux/configureStore';
import { SafeAreaView } from 'react-native';


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

export default class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <App/>
            </SafeAreaView>
        </Provider>

    );
  }
}

