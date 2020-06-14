import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import useBusiness from '../hooks/useBusiness';

const styles = EStyleSheet.create({
  image: {
    // aspectRatio: '3/2', -> does not work properly  on browsers
    width: 300,
    height: 200,
    borderRadius: 4,
    borderColor: 'rgba(135,206,235, 0.8)',
    borderWidth: 8,
    marginHorizontal: '$marginBase * 2',
    marginBottom: 10,
  },
  'image:first-child': {
    borderColor: 'rgba(250,128,114, 0.8)',
  },
  'image:last-child': {
    borderColor: 'rgba(184, 134, 11, 0.8)',
  },
  imagesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '$marginBase',
    paddingBottom: 20,
  },
  title: {
    color: '$textColor',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '$marginBase',
  },
});

const Result = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { status, data, error, isFetching } = useBusiness(id);

  if (status === 'loading' || isFetching) {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <Text style={styles.title}>{data.name}</Text>
      <FlatList
        data={data.photos}
        keyExtractor={photo => photo}
        contentContainerStyle={styles.imagesContainer}
        renderItem={({ item, index }) => (
          <Image
            style={EStyleSheet.child(styles, 'image', index, data.photos.length)}
            source={{ uri: item }}
          />
        )}
      />
    </>
  );
};

export default Result;
