import React, {Component} from 'react';
import { set } from './src/redux/modules/todo';
import ExcerciseList from './src/Components/ExcerciseList';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExcerciseView from './src/Components/ExcerciseView';
import { Provider } from 'react-redux';
import configureStore from './src/redux/configureStore';
import { SafeAreaView } from 'react-native';
import ExcerciseItem from './src/Components/ExcerciseItem';




class App extends Component {

  render() {
    if (this.props.excercises === null) {
      return null;
    }
    console.log("this.props.navigation from app", this.props.navigation);
    return ( 
          <ExcerciseList navigation={this.props.navigation}/>
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
    }
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator);
