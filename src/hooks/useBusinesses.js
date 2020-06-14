import { CancelToken } from 'axios';
import { useQuery } from 'react-query';
import api from '../utils/api';

const getBusinesses = async (_, params) => {
  // Create a new CancelToken source for this request
  const source = CancelToken.source();
  const promise = api.get('/search', {
    // Pass the source token to your request
    cancelToken: source.token,
    params,
  });
  // Cancel the request if React Query calls the `promise.cancel` method
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query');
  };

  return promise;
};

const useBusinesses = ({
  variables: { term = 'pasta', limit = 50, location = 'gothenburg' } = {},
  initialTerm,
  config,
} = {}) =>
  useQuery(['businesses', { term: term || initialTerm, limit, location }], getBusinesses, config);

export default useBusinesses;
