import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

EStyleSheet.build({});

const App = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
  </View>
);

export default App;
