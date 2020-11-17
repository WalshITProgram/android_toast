/**
 * @format
 * @flow strict-local
 */

import ToastExample from './ToastExample';


import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, 
  NativeModules,
} from 'react-native';

export default class App extends Component {
render(){
  return (
    <View style={{padding: 50}}>
      <TouchableOpacity onPress={ () => {
        //NativeModules.ToastExample.show("Hello World!");
        ToastExample.show('React Native Modules are Fun!!');
      }}>
        <Text>Press Me!</Text>
      </TouchableOpacity>
    </View>
  );
 }
}  

const styles = StyleSheet.create({
});

