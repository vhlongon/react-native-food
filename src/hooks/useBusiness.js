import { useQuery } from 'react-query';
import api from '../utils/api';

const getBusinessById = async (_, id) => {
  const { data } = await api.get(`/${id}`);
  return data;
};

const useBusiness = id => useQuery(['business', id], getBusinessById);

export default useBusiness;
