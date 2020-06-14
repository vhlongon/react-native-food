import { useQuery } from 'react-query';
import api from '../utils/api';

const getBusinesses = async (_, variables) => {
  const { data } = await api.get('/search', { params: variables });
  return data.businesses;
};

const useBusinesses = ({
  variables: { term = 'pasta', limit = 50, location = 'gothenburg' },
  initialTerm,
  manual = true,
  initialData = [],
  retry = false,
  ...config
} = {}) => {
  const termToSearch = term || initialTerm;
  return useQuery(['searchResults', { term: termToSearch, limit, location }], getBusinesses, {
    manual,
    initialData,
    retry,
    ...config,
  });
};

export default useBusinesses;
