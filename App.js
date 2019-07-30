import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hi ba!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
