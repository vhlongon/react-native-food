import React from 'react';
import { View, Text, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ResultsDetail from './ResultsDetail';

const styles = EStyleSheet.create({
  container: {
    marginVertical: '$marginBase / 2',
  },
  title: {
    color: '$textColor',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: '$marginBase',
    marginBottom: '$marginBase / 2',
  },
});

const ResultsList = ({ title, results = [] }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ResultsDetail result={item} />}
    />
  </View>
);

export default ResultsList;
