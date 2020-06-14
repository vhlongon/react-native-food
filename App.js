import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import Search from './src/screens/Search';

EStyleSheet.build({ $marginBase: 10, $textColor: '#333', $lightTextColor: '#666' });

const navigator = createStackNavigator(
  { Search },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: { title: 'Business search' },
  },
);

export default createAppContainer(navigator);
