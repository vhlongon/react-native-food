import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList';

const filterBy = (data, filter) => value => data.filter(dataItem => dataItem[filter] === value);

const styles = EStyleSheet.create({
  infoText: { color: '$textColor', margin: '$marginBase' },
  count: { fontWeight: 'bold' },
});

const Content = ({ error, data, status, isFetching }) => {
  if (status === 'loading' || isFetching) {
    return <Text style={styles.infoText}>Loading...</Text>;
  }
  if (status === 'error') {
    return <Text style={styles.infoText}>Something went wrong: {error.message}</Text>;
  }

  const businesses = data?.data?.businesses || [];

  if (businesses.length) {
    const resultsWithPrice = filterBy(businesses, 'price');
    return (
      <View>
        <Text style={styles.infoText}>
          We have found <Text style={styles.count}>{businesses.length}</Text> results
        </Text>
        <ScrollView>
          <ResultsList title="Cost Effective" results={resultsWithPrice('$')} />
          <ResultsList title="Bit pricier" results={resultsWithPrice('$$')} />
          <ResultsList title="Big spender" results={resultsWithPrice('$$$')} />
        </ScrollView>
      </View>
    );
  }
  return <Text style={styles.infoText}>Nothing found yet</Text>;
};

const Search = () => {
  const [term, setTerm] = useState('');
  const { status, data, error, refetch, isFetching } = useBusinesses({
    variables: { term },
    initialTerm: 'pasta',
    config: { retry: false, manual: true, initialData: {} },
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    // Wither use flex 1 in a view or return <> instead
    <View style={{ flex: 1 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={refetch} refetch={refetch} />
      <Content status={status} error={error} data={data} isFetching={isFetching} />
    </View>
  );
};

export default Search;
