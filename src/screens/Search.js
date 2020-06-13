import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import SearchBar from '../components/SearchBar';
import api from '../utils/api';

const Content = ({ error, data, status, isFetching }) => {
  if (status === 'loading' || isFetching) {
    return <Text>Loading...</Text>;
  }
  if (status === 'error') {
    return <Text>Error: {error.message}</Text>;
  }

  const businesses = data?.data?.businesses || [];
  return (
    <Text>{businesses.length ? `we have found: ${businesses.length}` : 'No results yet'}</Text>
  );
};

const Search = () => {
  const [term, setTerm] = useState('');
  const { status, data, error, refetch, isFetching } = useQuery(
    'searchResults',
    () => api.get('/search', { params: { term, limit: 50, location: 'gothenburg' } }),
    { manual: true, initialData: [] },
  );

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={refetch} />
      <Content status={status} error={error} data={data} isFetching={isFetching} />
    </View>
  );
};

export default Search;
