import { useQuery } from 'react-query';
import api from '../utils/api';

const getBusiness = async (_, { id }) => {
  const { data } = await api.get(`/${id}`);
  return data;
};

const useBusiness = ({ variables: { id }, initialData = {}, retry = false, ...config } = {}) =>
  useQuery(['searchResults', { id }], getBusiness, {
    initialData,
    retry,
    ...config,
  });

export default useBusiness;
