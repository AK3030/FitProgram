import React, {Component} from 'react';
import { set } from './src/redux/modules/todo';
import ExcerciseList from './src/Components/ExcerciseList';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ExcerciseView from './src/Components/ExcerciseView';



class App extends Component {

  testMethod = () => {
    console.log(this.props);
    this.props.addTodo("things")
  }

  render() {
    if (this.props.excercises === null) {
      return null;
    }
    return (
          <ExcerciseList/>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    ExcerciseView
  },
  {
    headerMode: 'none'
  }
)

const mapStateToProps = state => ({
  excerciseNames: Object.keys(state.excercises),
  excercises: state.excercises
});

const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(set(todo))
});

export default createAppContainer(AppNavigator);
