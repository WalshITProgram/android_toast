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
} from 'react-native';

export default class App extends Component {
render(){
  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ styles.button } onPress={ () => {
        //NativeModules.ToastExample.show("Hello World!");
        ToastExample.show('React Native Modules are Fun!!', ToastExample.LONG);
      }}>
        <Text style={ styles.text }>Press Me!</Text>
      </TouchableOpacity>
    </View>
  );
 }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#33BAFF',
    height: 80,
    width: 200,
  }
});

