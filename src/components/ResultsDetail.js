import React from 'react';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const placeholderImage = require('../../assets/placeholder.jpeg');

const styles = EStyleSheet.create({
  container: { marginHorizontal: '$marginBase' },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: { color: '$textColor', fontWeight: 'bold', fontSize: 14 },
  ratingStars: { color: '$lightTextColor' },
});

const ResultsDetail = ({ result = {} }) => {
  const source = result.image_url ? { uri: result.image_url } : placeholderImage;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.ratingStars}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;
