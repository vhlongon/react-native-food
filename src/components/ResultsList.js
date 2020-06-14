import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
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

const ResultsList = ({ navigation, title, results = [] }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal
      data={results}
      showsHorizontalScrollIndicator={false}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Result', { id: item.id })}>
          <ResultsDetail result={item} />
        </TouchableOpacity>
      )}
    />
  </View>
);

export default withNavigation(ResultsList);
