import React, {Component} from 'react';
import styled from 'styled-components';
import ArrowImageFile from '../../Images/icons8-chevron-right-filled-100.png';
import { TouchableOpacity } from 'react-native';

const Main = styled.View`
    width: 100%;
    height: auto;
    opacity: .5;
    height: 40;
    background-color: blue;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 10;
    padding-left: 10;
`

const ExcerciseText = styled.Text`
    color: white;
    background-color: purple;
    width: auto;
    flex-grow: 0;
`

const ArrowImage = styled.Image`
  width: 10;
  height: auto;
`

export default class ExcerciseItem extends Component {

  itemPress = () => {
    // this.props.navigator.navigate('ExcerciseView')
    console.log("item pressed", this.props.navigation);
  }

  render() {
    console.log("excircise item props ---", this.props.excerciseInfo);
    return (
        <TouchableOpacity onPress={this.itemPress}>
          <Main >
              <ExcerciseText>
                {this.props.name}
              </ExcerciseText>

              <ExcerciseText>
                Sets:
                {this.props.excerciseInfo.sets}
              </ExcerciseText>

              <ExcerciseText>
                Sets:
                {this.props.excerciseInfo.reps}
              </ExcerciseText>

              <ExcerciseText>
                Duration:
                {this.props.excerciseInfo.time}
              </ExcerciseText>

              <ArrowImage source={ArrowImageFile}></ArrowImage>

          </Main>
        </TouchableOpacity>
      
    );
  }
}

{/* <ExcerciseText>Sets: {this.props.excerciseInfo.sets}</ExcerciseText>
            <ExcerciseText>Reps: {this.props.excerciseInfo.reps}</ExcerciseText> */}