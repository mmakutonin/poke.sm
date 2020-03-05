import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import PokeCard from './components/PokeCard';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'space-evenly', alignItems: 'center'}}>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </View>
    );
  }
}
