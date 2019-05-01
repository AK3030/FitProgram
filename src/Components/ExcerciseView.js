import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class ExcerciseView extends Component {
  render() {
    return (
      <Text>{this.props.testing}</Text>
    );
  }
}