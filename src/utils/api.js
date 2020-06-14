import axios from 'axios';
import Constants from 'expo-constants';
import { API_KEY } from '../../apiConfig';

const browsers = ['Chrome', 'Firefox'];
const { deviceName } = Constants;

const rootUrl = 'https://api.yelp.com/v3/businesses';
const baseURL = `${
  browsers.includes(deviceName) ? 'https://cors-anywhere.herokuapp.com/' : ''
}${rootUrl}`;

export default axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
