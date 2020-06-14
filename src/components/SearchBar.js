import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { View, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  background: {
    backgroundColor: '#E1E1E1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: '$marginBase',
    marginTop: 10,
    flexDirection: 'row',
  },
  icon: { fontSize: 34, alignSelf: 'center', marginHorizontal: 14, color: '$textColor' },
  input: { flex: 1, fontSize: 18 },
});

const SearchBar = ({ term, onTermChange, onTermSubmit, refetch }) => {
  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      refetch();
    }
  };

  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={term}
        onKeyPress={handleKeyPress}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      <SimpleLineIcons name="reload" style={styles.icon} onPress={refetch} />
    </View>
  );
};

export default SearchBar;
